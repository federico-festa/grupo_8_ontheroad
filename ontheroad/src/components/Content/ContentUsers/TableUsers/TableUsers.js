import React from "react";

function TableUsers({name, surname, email, country, gender}) {
    return (
        <tr>
            <td>{name}</td>
            <td>{surname}</td>
            <td>{email}</td>
            <td>{country}</td>
            <td>{gender}</td>
        </tr>
    );
}

export default TableUsers;