const fs = require('fs');
const path = require('path');
const { check } = require('express-validator');

const login = (req,res,next) => {
    if(req.query.user=='Ada'|| req.query.user=='Greta'|| req.query.user=='Vim'|| req.query.user=='Tim'){
        next();
    }else{
        res.send('No tienes los privilegios para ingresar');
    };
    next();
};

module.exports = login;