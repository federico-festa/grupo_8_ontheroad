const db = require('../../database/models')
const sequelize = db.sequelize;
const { Op } = require('sequelize');
const { validationResult } = require('express-validator');
const { promiseImpl } = require('ejs');

const productsApiController = {
    products: (req, res) => {
        try {
            db.Product.findAll()
                .then(products => {
                    // const regions = products.reduce((acc, cur) => {
                    //     acc[cur.id_region] = (acc[cur.id_region] || 0) + 1
                    //     return acc;
                    // }, {})
                    // const regionCount = [
                    //     BuenosAires = 0,
                    //     Cordoba = 0,
                    // ];
                    // for(let i=0; i<=products.length; i++) {
                    //     if(products[i].id_region == 1) {
                    //         regionCount[0] + 1
                    //     } else if (products[i].id_region == 2) {
                    //         regionCount[1] + 1
                    //     }
                    // }
                    let response = {
                        meta: {
                            status: 200,
                            total: products.length,
                            url: 'api/products/list'
                        },
                        data: {
                            count: products.length,
                            countByRegion: products,
                            products: products
                        }
                    }
                    res.json(response);
                })
        } catch (error) {
            console.log(error);
        }
    },
    regions: (req, res) => {
        try {
            db.Region.findAll()
                .then(async regions => {
                    const regionsData = await Promise.all(
                        regions.map(async (region) => {
                            const dataRegion = await db.Product.findAll({
                                where: {
                                    id_region: region.id
                                }
                            })
                            return {
                                'name': region.name, 'clima': region.weather, 'quant': dataRegion.length
                            }
                        })
                    )
                    let response = {
                        meta: {
                            status: 200,
                            total: regionsData.length,
                            url: 'api/products/regions'
                        },
                        data: {
                            count: regionsData.length,
                            regions: regionsData
                        }
                    }
                    res.json(response);
                })
        } catch (error) {
            console.log(error);
        }
    },
    region1: (req, res) => {
        try {
            db.Product.findAll({
                where: {
                    id_region: 1
                }
            })
                .then(products => {
                    let response = {
                        meta: {
                            status: 200,
                            total: products.length,
                            url: 'api/products/region/1'
                        },
                        data: {
                            count: products.length
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
                            total: product.length,
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