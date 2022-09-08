const path = require('path');
const fs = require('fs');
const db = require('../database/models')
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const { validationResult } = require('express-validator');

const productsController = {
    products: (req,res) => {
        const products = db.Product.findAll()
        const regions = db.Region.findAll()
        Promise.all([products, regions])
        .then(([products, regions]) => {
            res.render('products', {products: products, regions: regions});
        })
        .catch((error) => {
            console.log("Error", error.original.sqlMessage);
                res.send('Error');
        })
    },
    detail: (req,res) => {
        const regions = db.Region.findAll()
        const product = db.Product.findOne({
            where: {
                id: req.params.id
            }
        })
        Promise.all([product, regions])
        res.render('detail', {product: product, regions: regions});
    },
    create: (req,res) => {
        db.Region.findAll()
        .then((regions) => {
            res.render('productCreate', {regions: regions});
        })
    },
    store: (req,res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.render('productCreate', { errors: errors.mapped(), oldData: req.body });
        };
        db.Product.create({
            name: req.body.name,
            price: req.body.price,
            discount: req.body.discount,
            regions_id: req.body.region_id,
            descriptionShort: req.body.descriptionShort,
            descriptionLong: req.body.descriptionLong,
            //image: req.body.image,//
        })
        .then((product) => {
            const regions = db.Region.findAll();
            res.redirect('/', {regions})
        });
    },
    edit: (req,res) => {
        let productToEdit = products.find(product => product.id == req.params.id);
        res.render('productEdit', {productToEdit: productToEdit});
    },
    update: (req,res) => {
        const productToUpdate = products.find(product => product.id == req.params.id);
		const productToEdit = req.body;
		productToUpdate.name = productToEdit.name;
		productToUpdate.price = productToEdit.price;
		productToUpdate.discount = productToEdit.discount;
		productToUpdate.category = productToEdit.category;
		productToUpdate.shortDescription = productToEdit.shortDescription;
        productToUpdate.longDescription = productToEdit.longDescription;
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
        res.redirect('/');
    },
    destroy: (req,res) => {
        let productsFilter = products.filter(product => product.id != req.params.id);
		fs.writeFileSync(productsFilePath, JSON.stringify(productsFilter, null, ' '));
        res.redirect('/');
    },
    cart: (req, res) => {
        res.render('cart');    
    }
};

module.exports = productsController;