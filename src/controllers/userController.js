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
    create: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.render('register', { errors: errors.mapped() });
        };
        db.User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            category_id: 2
        })
            .then((user) => {
                res.redirect('/');
            })
            .catch((error) => {
                console.log('Error', error.original.sqlMessage);
                res.send('Error');
            });
    },
    login: (req, res) => {
        res.render('login');
    },
    log: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.render('login', { errors: errors.mapped() });
        };
        let userFound = await db.User.findOne({ where: {email: {[Op.like]: req.body.email} }});
        if(!userFound) {
            res.render('login', {
                errors: {
                    email: {
                        msg: 'No se encuentra el email'
                    }
                }
            })
        };
        if(userFound && !(req.body.password==userFound.password)) {
            res.render('login', {
                errors: {
                    password: {
                        msg: 'La contraseña es incorrecta'
                    }
                }
            })
        };
        if(userFound && (req.body.password==userFound.password)) {
            delete userFound.password;
            req.session.userLog = userFound;
            if(req.body.rememberUser) {
                res.cookie('userEmail', req.body.email, { maxAge: 86400000});
            };
            res.redirect('/');
        };
    },
    logout: (req,res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        res.redirect('/');
    },
    profile: (req, res) => {
        res.render('profile', {user: req.session.userLog});
    },
    edit: (req, res) => {

    },
    update: (req, res) => {

    },
    delete: (req, res) => {

    },
    destroy: (req, res) => {

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