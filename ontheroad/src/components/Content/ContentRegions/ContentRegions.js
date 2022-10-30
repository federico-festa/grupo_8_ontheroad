import React from "react";
import { useEffect, useState } from 'react';
import '../ContentRegions/ContentRegions.css';

import TableRegions from '../ContentRegions/TableRegions/TableRegions.js';

function ContentRegions() {

    const [regions, setRegions] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/products/regions')
            .then(res => res.json())
            .then(data => setRegions(data.data.regions.map((region) => {
                return (
                    {'region': region.name, 'clima': region.weather, 'quant': 'x'}
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
                            <th>Región</th>
                            <th>Clima</th>
                            <th>Cantidad de productos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {regions.map((region, i) => {
                            return <TableRegions key={`${region}-${i}`} {...region} />
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ContentRegions;