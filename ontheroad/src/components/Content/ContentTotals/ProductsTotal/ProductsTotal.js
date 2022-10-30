import React from "react";
import { useEffect, useState } from 'react';

import '../ProductsTotal/ProductsTotal.css';

function ProductsTotal() {

    const [products, setProducts] = useState('');

    useEffect(() => {
        fetch('http://localhost:3001/api/products/list')
            .then(res => res.json())
            .then(data => setProducts(data.data.count))
            .catch(e => console.log(e))
    }, [])

    return (
        <div className="contentTotals">
            <div className="cardbody">
                <span className="total">Total de productos: {products}</span>
            </div>
        </div>
    )
}

export default ProductsTotal;