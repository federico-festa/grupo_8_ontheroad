const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const userController = {
    register: (req, res) => {
        res.render('register');    
    },    
    create: (req,res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
             res.render('register', { errors: errors.mapped() });
           };     
           db.User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            category_id: req.body.category_id
        })
        .then((user)=>{
            res.redirect('/');
        });   
    },
    login: (req, res) => {
        res.render('login');
    },
    log: (req,res) => {
        //Logica para loguear usuario
        res.redirect('/');
    },
    profile: (req,res) => {
        res.render('profile', {})
    },
    edit: (req,res) => {
        
    },
    update: (req,res) => {

    },
    delete: (req,res) => {

    },
    destroy: (req,res) => {

    }
    //Editar usuario?
    //Destruir usuario?
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