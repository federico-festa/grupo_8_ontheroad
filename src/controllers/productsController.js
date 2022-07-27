const path = require('path');
const productsController = {
    products: (req,res) => {
        res.render('products');
    },
    detail: (req,res) => {
        res.render('deatail');
    },
    create: (req,res) => {
        res.render('product-create-form');
    },
    store: (req,res) => {
        //Logica para crear producto
        res.redirect('/');
    },
    edit: (req,res) => {
        res.render('product-edit-form');
    },
    update: (req,res) => {
        //Logica para editar producto
        res.redirect('/');
    },
    destroy: (req,res) => {
        //Logica para eliminar producto
        res.redirect('/');
    },
    productCart: (req, res) => {
        res.render('cart');    
    },
    jujuy: (req, res) => {
        res.render('jujuy');    
    }
};

module.exports = productsController;