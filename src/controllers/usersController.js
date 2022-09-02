const path = require('path');
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

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
            password: bcryptjs.hashSync(req.body.password, 10),
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
    log: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.render('login', { errors: errors.mapped() });
        };
        db.User.findOne({
            where: {
                email: req.body.email
            }
        })
            .then((user) => {
                res.send([bcryptjs.compareSync(req.body.password, user.password), req.body.password, user.password]);
            })
        },
        




            //     if (!user) {
            //         res.render('login', {
            //             errors: {
            //                 email: {
            //                     msg: 'No se encuentra el email'
            //                 }
            //             }
            //         });
            //     } else if (user && bcrypt.compareSync(req.body.password, user.password)) {
            //         res.send(bcrypt.compareSync(req.body.password.toString(), user.password));
            //     } else {
            //         res.send(bcrypt.compareSync(req.body.password.toString(), user.password));
            //     }
            // })
            // .catch((error) => {
            //     res.send(error);
            // });
    // const userLog = db.User.findOne({
    //     where: {
    //         email: req.body.email
    //     }
    // })
    // if(userLog) {
    //     const passwordOk = bcrypt.compareSync(req.body.password, userLog.password);
    //     if(passwordOk) {
    //         res.redirect('/');
    //     } else {
    //         res.render('login', {
    //             errors: {
    //                 email: {
    //                     msg: 'Las credenciales son invalidas'
    //                 }
    //             }
    //         });  
    //     }
    // } else {
    //     res.render('login', {
    //         errors: {
    //             email: {
    //                 msg: 'Email no encontrado'
    //             }
    //         }
    //     })
    // }

    // const userLog = db.User.findOne({
    //     where: {
    //         email: req.body.email
    //     }
    // })
    // if(userLog){
    //     res.redirect('/')
    // } else {
    //     res.send(req.body.email);
    // }
    // .then((user) => {
    //     res.redirect('/')
    // }) 
    // .catch((error) => {
    //     console.log('Error', error.original.sqlMessage);
    //     res.send('Error');
    // });
    profile: (req, res) => {
        res.render('profile', {})
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