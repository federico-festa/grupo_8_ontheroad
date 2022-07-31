const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {
    products: (req,res) => {
        res.render('products', {products: products});
    },
    detail: (req,res) => {
        let product = products.find(product => product.id == req.params.id);
        res.render('detail', {product: product});
    },
    create: (req,res) => {
        res.render('productCreateForm');
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
        let productToEdit = products.find(product => product.id == req.params.id);
        res.render('productEditForm', {productToEdit: productToEdit});
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
    },
};

module.exports = productsController;