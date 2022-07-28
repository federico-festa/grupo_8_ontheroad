const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {
    products: (req,res) => {
        res.render('products');
    },
    detail: (req,res) => {
        res.render('detail');
    },
    create: (req,res) => {
        res.render('product-create-form');
    },
    store: (req,res) => {
        let newProduct = req.body;
		newProduct.id = (products.length + 1);
		newProduct.image = req.file.filename;
		products.push(newProduct);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
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
    cart: (req, res) => {
        res.render('cart');    
    },
};

module.exports = productsController;