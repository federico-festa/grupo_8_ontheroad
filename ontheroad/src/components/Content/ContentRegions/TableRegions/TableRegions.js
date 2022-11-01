import React from "react";
import '../TableRegions/TableRegions.css';

function TableRegions({name, clima, quant}) {
    return (
        <tr>
            <td>{name}</td>
            <td>{clima}</td>
            <td>{quant}</td>
        </tr>
    );
}

export default TableRegions;