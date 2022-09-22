const path = require('path');
const fs = require('fs');
const db = require('../database/models')
const sequelize = db.sequelize;
const { Op } = require('sequelize');
const { validationResult } = require('express-validator');

const productsController = {
    list: (req, res) => {
        const products = db.Product.findAll({ include: 'product_region' })
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
    search: async (req, res) => {
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
    },
    promotions: async (req, res) => {
        const promotions = await db.Product.findAll({
            where: {
                discount: 10
            }
        });
        res.render('promotions', { promotions: promotions });
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
                clima: req.body.clima,
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
        const regionToEdit = await db.Region.findOne({
            where: {
                id: req.params.id
            }
        });
        res.render('regionEdit', { regionToEdit: regionToEdit })
    },
    regionUpdate: async (req, res) => {
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
                clima: req.body.clima,
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
    },
    regionDelete: async (req, res) => {
        const region = await db.Region.findOne({
            where: {
                id: req.params.id
            }
        })
        res.render('regionDelete', { region: region });
    },
    regionDestroy: (req, res) => {
        db.Region.destroy({
            where: { id: req.params.id }
        });
        res.redirect('/');
    },
    regionImgEdit: async (req, res) => {
        const regionToEdit = await db.Region.findOne({
            where: {
                id: req.params.id
            }
        });
        res.render('regionImgEdit', {regionToEdit: regionToEdit});
    },
    regionImgUpdate: async (req, res) => {
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
            }).then((product) => {
                res.redirect('/');
            });
        };
    },
    detail: async (req, res) => {
        const regions = await db.Region.findAll()
        const product = await db.Product.findOne({
            where: {
                id: req.params.id
            },
            include: [{ association: 'product_region' }]
        })
        console.log('----')
        console.log(product)
        console.log('----')
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
            db.Product.create({
                name: req.body.name,
                price: req.body.price,
                discount: req.body.discount,
                descriptionShort: req.body.descriptionShort,
                descriptionLong: req.body.descriptionLong,
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
    },
    edit: async (req, res) => {
        const regions = await db.Region.findAll();
        const productToEdit = await db.Product.findOne({
            where: {
                id: req.params.id
            }
        });
        res.render('productEdit', { productToEdit: productToEdit, regions: regions });
    },
    update: async (req, res) => {
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
                descriptionShort: req.body.descriptionShort,
                descriptionLong: req.body.descriptionLong,
            }, {
                where: { id: req.params.id }
            }).then((product) => {
                res.redirect('/')
            });
        };
    },
    delete: async (req, res) => {
        const product = await db.Product.findOne({
            where: {
                id: req.params.id
            }
        })
        res.render('productDelete', { product: product });
    },
    destroy: (req, res) => {
        db.Product.destroy({
            where: { id: req.params.id }
        });
        res.redirect('/');
    },
    imgEdit: async (req, res) => {
        const productToEdit = await db.Product.findOne({
            where: {
                id: req.params.id
            }
        })
        res.render('imgEdit', { productToEdit: productToEdit });
    },
    imgUpdate: async (req, res) => {
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
    },
    cart: (req, res) => {
        res.render('cart');
    }
};

module.exports = productsController;