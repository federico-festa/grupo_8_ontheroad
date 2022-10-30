import React from "react";
import '../TableRegions/TableRegions.css';

function TableRegions({region, clima, quant}) {
    return (
        <tr>
            <td>{region}</td>
            <td>{clima}</td>
            <td>{quant}</td>
        </tr>
    );
}

export default TableRegions;