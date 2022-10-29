import React from "react";
import '../Table/Table.css';

function Table({lugar, precio, disc, region, desc}) {
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

export default Table;