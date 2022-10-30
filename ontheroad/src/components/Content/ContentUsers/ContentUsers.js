import React from "react";
import { useEffect, useState } from 'react';
import '../ContentUsers/ContentUsers.css';

import TableUsers from '../ContentUsers/TableUsers/TableUsers.js';

function ContentUsers() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/users/list')
            .then(res => res.json())
            .then(data => setUsers(data.data.users.map((user) => {
                return (
                    {'name': user.firstName, 'surname': user.lastName, 'email': user.email, 'country': user.country, 'gender': user.gender}
                )
            })))
            .catch(e => console.log(e))
    }, [])

    console.log(users);

    return (
        <div className="contentProducts">
            <div className="table">
                <table className="tablecontent">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Email</th>
                            <th>País</th>
                            <th>Género</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, i) => {
                            return <TableUsers key={`${user}-${i}`} {...user} />
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ContentUsers;