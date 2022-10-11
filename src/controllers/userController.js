const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require('sequelize');

const userController = {
    register: (req, res) => {
        res.render('register');
    },
    create: async (req, res) => {
        try {
            let emailUsed = await db.User.findOne({ where: { email: req.body.email } });
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.render('register', { errors: errors.mapped(), oldData: req.body });
            } else if (emailUsed) {
                res.render('register', { errors: { email: { msg: 'El email ya está en uso' } } });
            } else {
                db.User.create({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: bcryptjs.hashSync(req.body.password, 10),
                    id_type: 2
                })
                    .then((user) => {
                        res.redirect('/user/login');
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        } catch (error) {
            console.log(error);
            res.render('error');
        };
    },
    login: (req, res) => {
        res.render('login');
    },
    log: async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.render('login', { errors: errors.mapped(), oldData: req.body });
            };
            let userFound = await db.User.findOne({ where: { email: { [Op.like]: req.body.email } } });
            let passOk = bcryptjs.compareSync(req.body.password, userFound.password);
            if (!userFound) {
                res.render('login', {
                    errors: {
                        email: {
                            msg: 'No se encuentra el email'
                        }
                    }
                })
            };
            if (userFound && !passOk) {
                res.render('login', {
                    errors: {
                        password: {
                            msg: 'La contraseña es incorrecta'
                        }
                    }
                })
            };
            if (userFound && passOk) {
                delete userFound.password;
                req.session.userLog = userFound;
                if (req.body.rememberUser) {
                    res.cookie('userEmail', req.body.email, { maxAge: 86400000 });
                };
                res.redirect('/');
            };
        } catch (error) {
            console.log(error);
            res.render('error');
        };

    },
    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        res.redirect('/');
    },
    profile: async (req, res) => {
        try {

            const user = await db.User.findOne({
                where: {
                    id: req.session.userLog.id
                }
            })
            res.render('profile', { user: user });
        } catch (error) {
            console.log(error);
            res.render('error');
        };
    },
    edit: async (req, res) => {
        try {

            const userToEdit = await db.User.findOne({
                where: {
                    id: req.params.id
                }
            });
            res.render('userEdit', { userToEdit: userToEdit });
        } catch (error) {
            console.log(error);
            res.render('error');
        };
    },
    update: async (req, res) => {
        try {

            const userToEdit = await db.User.findOne({
                where: {
                    id: req.params.id
                }
            });
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.render('userEdit', { errors: errors.mapped(), oldData: req.body, userToEdit: userToEdit });
            } else {
                db.User.update({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    dni: req.body.dni,
                    gender: req.body.gender,
                    email: req.body.email,
                    address: req.body.address,
                    telephone: req.body.telephone,
                    postalCode: req.body.postalCode,
                    country: req.body.country,
                }, {
                    where: { id: req.params.id }
                }).then((user) => {
                    res.redirect('/');
                });
            };
        } catch (error) {
            console.log(error);
            res.render('error');
        };
    },
    delete: async (req, res) => {
        try {
            const user = await db.User.findOne({
                where: {
                    id: req.params.id
                }
            })
            res.render('userDelete', { user: user });
        } catch (error) {
            console.log(error);
            res.render('error');
        };
    },
    destroy: (req, res) => {
        db.User.destroy({
            where: { id: req.params.id }
        });
        res.redirect('/');
    },
    passwordEdit: async (req, res) => {
        try {
            const userToEdit = await db.User.findOne({
                where: {
                    id: req.params.id
                }
            });
            res.render('userPasswordEdit', { userToEdit: userToEdit });
        } catch (error) {
            console.log(error);
            res.render('error');
        };
    },
    passwordUpdate: async (req, res) => {
        try {
            const userToEdit = await db.User.findOne({
                where: {
                    id: req.params.id
                }
            });
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.render('userPasswordEdit', { errors: errors.mapped(), oldData: req.body, userToEdit: userToEdit });
            } else if (req.body.password != req.body.password2) {
                res.render('userPasswordEdit', { errors: errors.mapped(), errors: { password2: { msg: 'Las contraseñas no coinciden' } }, oldData: req.body, userToEdit: userToEdit });
            } else {
                db.User.update({
                    password: bcryptjs.hashSync(req.body.password, 10),
                }, {
                    where: { id: req.params.id }
                }).then((user) => {
                    res.redirect('/');
                });
            };
        } catch (error) {
            console.log(error);
            res.render('error');
        };
    },
    imgEdit: async (req, res) => {
        try {
            const userToEdit = await db.User.findOne({
                where: {
                    id: req.params.id
                }
            });
            res.render('userImgEdit', { userToEdit: userToEdit });
        } catch (error) {
            console.log(error);
            res.render('error');
        };
    },
    imgUpdate: async (req, res) => {
        try {
            const userToEdit = await db.User.findOne({
                where: {
                    id: req.params.id
                }
            });
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.render('userImgEdit', { errors: errors.mapped(), oldData: req.body, userToEdit: userToEdit });
            } else {
                db.User.update({
                    img: req.file.filename
                }, {
                    where: { id: req.params.id }
                }).then((user) => {
                    res.redirect('/user/profile');
                });
            };
        } catch (error) {
            console.log(error);
            res.render('error');
        };
    },
    imgDestroy: async (req, res) => {
        try {
            const userToEdit = await db.User.findOne({
                where: {
                    id: req.params.id
                }
            });
            db.User.update({
                img: ''
            }, {
                where: { id: req.params.id }
            }).then((user) => {
                res.redirect('/user/profile');
            });
        } catch (error) {
            console.log(error);
            res.render('error');
        };
    }
};

module.exports = userController;



//Controller para JSON
// const usersFilePath = path.join(__dirname, '../data/users.json');
// const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
// const userController = {
//     register: (req, res) => {
//         res.render('register');
//     },
//     create: (req,res) => {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//              res.render('register', { errors: errors.mapped() });
//            };
//         let newUser = req.body;
//         newUser.id = (users.length + 1);
//         newUser.image = req.file.filename;
//         newUser.password = bcrypt.hashSync(req.body.password, 10);
//         users.push(newUser);
//         fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
//         res.redirect('/');
//     },
//     login: (req, res) => {
//         res.render('login');
//     },
//     log: (req,res) => {
//         //Logica para loguear usuario
//         res.redirect('/');
//     },
//     //Editar usuario?
//     //Destruir usuario?
// };

// module.exports = userController;