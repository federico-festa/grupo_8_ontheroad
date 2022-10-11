const path = require('path');
const fs = require('fs');
const db = require('../database/models')
const sequelize = db.sequelize;
const { Op } = require('sequelize');
const { validationResult } = require('express-validator');

const productsController = {
    list: async (req, res) => {
        try {
            const products = await db.Product.findAll({ association: 'product_region' })
            const regions = await db.Region.findAll()
            res.render('products', { products: products, regions: regions });
        } catch (error) {
            console.log(error);
            res.render('error');
        };
    },
    search: async (req, res) => {
        try {
            const promotions = await db.Product.findAll({
                where: {
                    discount: 10
                }
            });
            const searchResults = await db.Product.findAll({
                where: {
                    name: { [Op.like]: '%' + req.query.search + '%' }
                }
            });
            res.render('search', { products: searchResults, promotions: promotions, search: req.query.search });
        } catch (error) {
            console.log(error);
            res.render('error');
        };
    },
    promotions: async (req, res) => {
        try {
            const promotions = await db.Product.findAll({
                where: {
                    discount: 10
                }
            });
            res.render('promotions', { promotions: promotions });
        } catch (error) {
            console.log(error);
            res.render('error');
        };
    },
    regions: (req, res) => {
        db.Region.findAll()
            .then((regions) => {
                res.render('regions', { regions: regions });
            });
    },
    regionDetail: (req, res) => {
        db.Region.findByPk(req.params.id)
            .then((region) => {
                res.render('regionDetail', { region: region });
            });
    },
    regionCreate: (req, res) => {
        res.render('regionCreate');
    },
    regionStore: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.render('regionCreate', { errors: errors.mapped(), oldData: req.body });
        } else {
            db.Region.create({
                name: req.body.name,
                weather: req.body.weather,
                img: req.file.filename
            })
                .then((region) => {
                    res.redirect('/');
                })
                .catch((error) => {
                    console.log(error);
                })
        };
    },
    regionEdit: async (req, res) => {
        try {
            const regionToEdit = await db.Region.findOne({
                where: {
                    id: req.params.id
                }
            });
            res.render('regionEdit', { regionToEdit: regionToEdit })
        } catch (error) {
            console.log(error);
            res.render('error');
        };
    },
    regionUpdate: async (req, res) => {
        try {
            const regionToEdit = await db.Region.findOne({
                where: {
                    id: req.params.id
                }
            });
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.render('regionEdit', { errors: errors.mapped(), oldData: req.body, regionToEdit: regionToEdit });
            } else if (req.file) {
                db.Region.update({
                    name: req.body.name,
                    weather: req.body.clima,
                    img: req.file.filename
                }, {
                    where: { id: req.params.id }
                }).then((region) => {
                    res.redirect('/')
                });
            } else {
                db.Region.update({
                    name: req.body.name,
                    clima: req.body.clima
                }, {
                    where: { id: req.params.id }
                }).then((region) => {
                    res.redirect('/')
                });
            };
        } catch (error) {
            console.log(error);
            res.render('error');
        };
    },
    regionDelete: async (req, res) => {
        try {
            const region = await db.Region.findOne({
                where: {
                    id: req.params.id
                }
            })
            res.render('regionDelete', { region: region });
        } catch (error) {
            console.log(error);
            res.render('error');
        };
    },
    regionDestroy: (req, res) => {
        db.Region.destroy({
            where: { id: req.params.id }
        });
        res.redirect('/');
    },
    regionImgEdit: async (req, res) => {
        try {
            const regionToEdit = await db.Region.findOne({
                where: {
                    id: req.params.id
                }
            });
            res.render('regionImgEdit', { regionToEdit: regionToEdit });
        } catch (error) {
            console.log(error);
            res.render('error');
        };
    },
    regionImgUpdate: async (req, res) => {
        try {
            const regionToEdit = await db.Region.findOne({
                where: {
                    id: req.params.id
                }
            });
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.render('regionImgEdit', { errors: errors.mapped(), oldData: req.body, regionToEdit: regionToEdit });
            } else {
                db.Region.update({
                    img: req.file.filename
                }, {
                    where: { id: req.params.id }
                }).then((region) => {
                    res.redirect('/');
                });
            };
        } catch (error) {
            console.log(error);
            res.render('error');
        };
    },
    detail: async (req, res) => {
        try {
            const regions = await db.Region.findAll()
            const product = await db.Product.findOne({
                where: {
                    id: req.params.id
                },
                include: [{ association: 'product_region' }]
            })
            res.render('detailB', { product: product, regions: regions });
        } catch (error) {
            console.log(error);
            res.render('error');
        };
    },
    create: (req, res) => {
        db.Region.findAll()
            .then((regions) => {
                res.render('productCreate', { regions: regions });
            })
    },
    store: async (req, res) => {
        try {
            const regions = await db.Region.findAll();
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.render('productCreate', { errors: errors.mapped(), oldData: req.body, regions: regions });
            } else {
                db.Product.create({
                    name: req.body.name,
                    price: req.body.price,
                    discount: req.body.discount,
                    shortDescription: req.body.shortDescription,
                    longDescription: req.body.longDescription,
                    img: req.file.filename,
                    id_region: req.body.id_region
                })
                    .then((product) => {
                        res.redirect('/');
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            };
        } catch (error) {
            console.log(error);
            res.render('error');
        };
    },
    edit: async (req, res) => {
        try {
            const regions = await db.Region.findAll();
            const productToEdit = await db.Product.findOne({
                where: {
                    id: req.params.id
                }
            });
            res.render('productEdit', { productToEdit: productToEdit, regions: regions });
        } catch (error) {
            console.log(error);
            res.render('error');
        };
    },
    update: async (req, res) => {
        try {
            const regions = await db.Region.findAll();
            const productToEdit = await db.Product.findOne({
                where: {
                    id: req.params.id
                }
            });
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.render('productEdit', { errors: errors.mapped(), oldData: req.body, regions: regions, productToEdit: productToEdit });
            } else {
                db.Product.update({
                    name: req.body.name,
                    price: req.body.price,
                    discount: req.body.discount,
                    id_region: req.body.id_region,
                    shortDescription: req.body.shortDescription,
                    longDescription: req.body.longDescription,
                }, {
                    where: { id: req.params.id }
                }).then((product) => {
                    res.redirect('/')
                });
            };
        } catch (error) {
            console.log(error);
            res.render('error');
        };
    },
    delete: async (req, res) => {
        try {
            const product = await db.Product.findOne({
                where: {
                    id: req.params.id
                }
            })
            res.render('productDelete', { product: product });
        } catch (error) {
            console.log(error);
            res.render('error');
        };
    },
    destroy: (req, res) => {
        db.Product.destroy({
            where: { id: req.params.id }
        });
        res.redirect('/');
    },
    imgEdit: async (req, res) => {
        try {
            const productToEdit = await db.Product.findOne({
                where: {
                    id: req.params.id
                }
            })
            res.render('imgEdit', { productToEdit: productToEdit });
        } catch (error) {
            console.log(error);
            res.render('error');
        };
    },
    imgUpdate: async (req, res) => {
        try {
            const productToEdit = await db.Product.findOne({
                where: {
                    id: req.params.id
                }
            });
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.render('imgEdit', { errors: errors.mapped(), oldData: req.body, productToEdit: productToEdit });
            } else {
                db.Product.update({
                    img: req.file.filename
                }, {
                    where: { id: req.params.id }
                }).then((product) => {
                    res.redirect('/');
                });
            };
        } catch (error) {
            console.log(error);
            res.render('error');
        };
    }
};

module.exports = productsController;