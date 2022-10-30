import React from "react";
import '../TableProducts/TableProducts.css';

function TableProducts({lugar, precio, disc, region, desc}) {
    return (
        <tr>
            <td>{lugar}</td>
            <td>${precio}</td>
            <td>{disc}%</td>
            <td>{region}</td>
            <td>{desc}</td>
        </tr>
    );
}

export default TableProducts;