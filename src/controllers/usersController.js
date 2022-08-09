const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const userController = {
    register: (req, res) => {
        res.render('register');    
    },
    login: (req, res) => {
        res.render('login');    
    },
    create: (req,res) => {
        let newUser = req.body;
        newUser.id = (users.length + 1);
        newUser.image = req.file.filename;
        newUser.password = bcrypt.hashSync(req.body.password, 10);
        users.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
        res.redirect('/');
    },
    log: (req,res) => {
        //Logica para loguear usuario
        res.redirect('/');
    },
    //Editar usuario?
    //Destruir usuario?
};

module.exports = userController;