const path = require('path');
const fs = require('fs');
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
        let emailUsed = await db.Client.findOne({ where: { email: req.body.email } });
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.render('register', { errors: errors.mapped(), oldData: req.body });
        } else if (emailUsed) {
            res.render('register', { errors: { email: { msg: 'El email ya está en uso' } } });
        } else {
            await db.Client.create({
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
        };
    },
    login: (req, res) => {
        res.render('login');
    },
    log: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.render('login', { errors: errors.mapped(), oldData: req.body });
        };
        let userFound = await db.Client.findOne({ where: { email: { [Op.like]: req.body.email } } });
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
    },
    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        res.redirect('/');
    },
    profile: async (req, res) => {
        const user = await db.Client.findOne({
            where: {
                id: req.session.userLog.id
            }
        })
        res.render('profile', { user: user });
    },
    edit: async (req, res) => {
        const userToEdit = await db.Client.findOne({
            where: {
                id: req.params.id
            }
        });
        res.render('userEdit', { userToEdit: userToEdit });
    },
    update: async (req, res) => {
        const userToEdit = await db.Client.findOne({
            where: {
                id: req.params.id
            }
        });
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.render('userEdit', { errors: errors.mapped(), oldData: req.body, userToEdit: userToEdit });
        } else {
            db.Client.update({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                dni: req.body.dni,
                genero: req.body.genero,
                email: req.body.email,
                password: bcryptjs.hashSync(req.body.password, 10),
                domicilio: req.body.domicilio,
                telefono: req.body.telefono,
                codigoPostal: req.body.codigoPostal,
                pais: req.body.pais,
            }, {
                where: { id: req.params.id }
            }).then((user) => {
                res.redirect('/user/profile');
            });
        };
    },
    delete: async (req, res) => {
        const user = await db.Client.findOne({
            where: {
                id: req.params.id
            }
        })
        res.render('userDelete', { user: user });
    },
    destroy: (req, res) => {
        db.Client.destroy({
            where: { id: req.params.id }
        });
        res.redirect('/');
    },
    imgEdit: async (req, res) => {
        const userToEdit = await db.Client.findOne({
            where: {
                id: req.params.id
            }
        });
        res.render('userImgEdit', {userToEdit: userToEdit});
    },
    imgUpdate: async (req, res) => {
        const userToEdit = await db.Client.findOne({
            where: {
                id: req.params.id
            }
        });
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.render('userImgEdit', { errors: errors.mapped(), oldData: req.body, userToEdit: userToEdit });
        } else {
            db.Client.update({
                img: req.file.filename
            }, {
                where: { id: req.params.id }
            }).then((user) => {
                res.redirect('/user/profile');
            });
        };
    },
    imgDestroy: async (req, res) => {
        const userToEdit = await db.Client.findOne({
            where: {
                id: req.params.id
            }
        });
        db.Client.update({
            img: ''
        }, {
            where: { id: req.params.id }
        }).then((user) => {
            res.redirect('/user/profile');
        });
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