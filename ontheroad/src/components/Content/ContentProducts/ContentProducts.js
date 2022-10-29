import React from "react";
import { useEffect, useState } from 'react';
import '../ContentProducts/ContentProducts.css';
import '../ContentProducts/Table/Table.css';

import Table from '../ContentProducts/Table/Table.js';

function ContentProducts() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/products/list')
            .then(res => res.json())
            .then(data => setProducts(data.data.products.map((product) => {
                return (
                    {'lugar': product.name, 'precio': product.price, 'region': product.idRegion, 'desc': product.shortDescription, 'disc': product.discount}
                )
            })))
            .catch(e => console.log(e))
    }, [])

    return (
        <div className="contentProducts">
            <div className="table">
                <table className="tablecontent">
                    <thead>
                        <tr>
                            <th>Lugar</th>
                            <th>Precio</th>
                            <th>Descuento</th>
                            <th>Región</th>
                            <th>Descripción breve</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, i) => {
                            return <Table key={`${product}-${i}`} {...product} />
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ContentProducts;