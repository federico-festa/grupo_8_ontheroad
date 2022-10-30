import React from "react";
import { useEffect, useState } from 'react';

import '../UsersTotal/UsersTotal.css';

function UsersTotal() {

    const [users, setUsers] = useState('');
    useEffect(() => {
        fetch('http://localhost:3001/api/users/list')
            .then(res => res.json())
            .then(data => setUsers(data.data.count))
            .catch(e => console.log(e))
    }, [])

    return (
        <div className="contentTotals">
            <div className="cardbody">
                <span className="total">Total de usuarios: {users}</span>
            </div>
        </div>
    )
}

export default UsersTotal;