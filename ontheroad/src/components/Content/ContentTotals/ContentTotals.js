import React, { useEffect, useState } from "react";
import '../ContentTotals/ContentTotals.css';

function ContentTotals() {

    const [products, setProducts] = useState('');
    const [regions, setRegions] = useState('');
    const [users, setUsers] = useState('');

    useEffect(() => {
        fetch('http://localhost:3001/api/products/list')
            .then(res => res.json())
            .then(data => setProducts(data.data.count))
            .catch(e => console.log(e))
    }, [])

    useEffect(() => {
        fetch('http://localhost:3001/api/products/regions')
            .then(res => res.json())
            .then(data => setRegions(data.data.count))
            .catch(e => console.log(e))
    }, [])

    useEffect(() => {
        fetch('http://localhost:3001/api/users/list')
            .then(res => res.json())
            .then(data => setUsers(data.data.count))
            .catch(e => console.log(e))
    }, [])

    return (
        <React.Fragment>
            <div className="contentTotals">
                <div className="cardbody">
                    <span className="total">Total de productos: {products}</span>
                </div>
                <div className="cardbody">
                    <span className="total">Total de regiones: {regions}</span>
                </div>
                <div className="cardbody">
                    <span className="total">Total de usuarios: {users}</span>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ContentTotals;