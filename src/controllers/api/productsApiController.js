const db = require('../../database/models')
const sequelize = db.sequelize;
const { Op } = require('sequelize');
const { validationResult } = require('express-validator');

const productsApiController = {
    products:  (req, res) => {
        try {
            db.Product.findAll()
            .then(products => {
                let response = {
                    meta: {
                        status: 200,
                        total: products.length,
                        url: 'api/products/list'
                    },
                    data: {
                        count: products.length,
                        countByRegion: products.length,
                        products: products
                    }
                }
                res.json(response);
            })
        } catch (error) {
            console.log(error);
        }
    },
    detail: (req, res) => {
        try {
            db.Product.findByPk(req.params.id)
            .then(product => {
                let response = {
                    meta: {
                        status: 200,
                        total:product.length,
                        url: 'api/products/:id'
                    },
                    data: {
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        discount: product.discount,
                        shortDescription: product.shortDescription,
                        longDescription: product.longDescription,
                        img: './public/img/products/' + product.img,
                        region: []
                    }
                }
                res.json(response);
            })
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = productsApiController;