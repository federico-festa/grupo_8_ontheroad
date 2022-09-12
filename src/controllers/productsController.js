const path = require('path');
const fs = require('fs');
const db = require('../database/models')
const sequelize = db.sequelize;
const { Op } = require('sequelize');
const { validationResult } = require('express-validator');

const productsController = {
    products: (req, res) => {
        const products = db.Product.findAll()
        const regions = db.Region.findAll()
        Promise.all([products, regions])
            .then(([products, regions]) => {
                res.render('products', { products: products, regions: regions });
            })
            .catch((error) => {
                console.log("Error", error.original.sqlMessage);
                res.send('Error');
            });
    },
    detail: (req, res) => {
        const regions = db.Region.findAll()
        const product = db.Product.findOne({
            where: {
                id: req.params.id
            }
        })
        Promise.all([product, regions])
        res.render('detail', { product: product, regions: regions });
    },
    create: (req, res) => {
        db.Region.findAll()
            .then((regions) => {
                res.render('productCreate', { regions: regions });
            })
    },
    store: async (req, res) => {
        const regions = await db.Region.findAll();
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.render('productCreate', { errors: errors.mapped(), oldData: req.body, regions: regions });
        } else {
            await db.Product.create({
                name: req.body.name,
                price: req.body.price,
                discount: req.body.discount,
                descriptionShort: req.body.descriptionShort,
                descriptionLong: req.body.descriptionLong,
                image: req.file.filename,
                id_region: req.body.id_region
            })
                .then((product) => {
                    res.redirect('/');
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    },
    edit: async (req, res) => {
        const regions = await db.Region.findAll();
        const productToEdit = await db.Product.findOne({
            where: {
                id: req.params.id
            }
        })
        res.render('productEdit', { productToEdit: productToEdit, regions: regions });
    },
    update: (req, res) => {
        if(req.file) {
            db.Product.update({
                name: req.body.name,
                price: req.body.price,
                discount: req.body.discount,
                id_region: req.body.id_region,
                descriptionShort: req.body.descriptionShort,
                descriptionLong: req.body.descriptionLong,
                img: req.file.filename
            },{
                where: {id: req.params.id}
            }).then((product)=>{
                res.redirect('/products')
            });
        } else {
            db.Product.update({
                name: req.body.name,
                price: req.body.price,
                discount: req.body.discount,
                id_region: req.body.id_region,
                descriptionShort: req.body.descriptionShort,
                descriptionLong: req.body.descriptionLong,
            },{
                where: {id: req.params.id}
            }).then((product)=>{
                res.redirect('/products')
            });
        };
    },
    delete: async (req, res) => {
        const product = await db.Product.findOne({
            where: {
                id: req.params.id
            }
        })
        res.render('productDelete', {product: product});
    },
    destroy: (req, res) => {
        db.Product.destroy({
            where: {id: req.params.id}
        });
        res.redirect('/');
    },
    cart: (req, res) => {
        res.render('cart');
    }
};

module.exports = productsController;