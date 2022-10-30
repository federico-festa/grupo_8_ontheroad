import React from "react";
import { useEffect, useState } from 'react';

import '../RegionsTotal/RegionsTotal.css';

function RegionsTotal() {

    const [regions, setRegions] = useState('');
    useEffect(() => {
        fetch('http://localhost:3001/api/products/regions')
            .then(res => res.json())
            .then(data => setRegions(data.data.count))
            .catch(e => console.log(e))
    }, [])

    return (
        <div className="contentTotals">
            <div className="cardbody">
                <span className="total">Total de regiones: {regions}</span>
            </div>
        </div>
    )
}

export default RegionsTotal;