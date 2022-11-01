const db = require('../../database/models')
const sequelize = db.sequelize;
const { Op } = require('sequelize');

const productsApiController = {
    products: (req, res) => {
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
                            img: 'http://localhost:3001/img/products/' + product.img,
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