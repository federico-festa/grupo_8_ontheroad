import React from "react";
import { useEffect, useState } from 'react';

import '../LastProduct/LastProduct.css';

function LastProduct() {

    const [id, setId] = useState('');

    useEffect(() => {
        fetch('http://localhost:3001/api/products/list')
            .then(res => res.json())
            .then(data => setId(data.data.count))
            .catch(e => console.log(e))
    }, [])

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/products/detail/' + id)
            .then(res => res.json())
            .then(data => setProduct({ 'img': data.data.img, 'name': data.data.name, 'price': data.data.price, 'discount': data.data.discount, 'desc': data.data.shortDescription }))
            .catch(e => console.log(e))
    }, [id])

    return (
        <div className="contentProduct">
            <p className="lastTitle">Último producto en la Base de datos</p>
            <div className="cardProduct">
                <img className="productImg" src={product.img} alt='productImg'></img>
                <div className="lastText">
                    <p className="productName">{product.name}</p>
                    <p className="productDesc">{product.desc}</p>
                    <p className="productPrice">Precio: ${product.price}</p>
                    <p className="productDiscount">Descuento: {product.discount}%</p>
                </div>
            </div>
        </div>
    )
}

export default LastProduct;