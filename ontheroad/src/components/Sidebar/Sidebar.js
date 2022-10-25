import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

function Sidebar() {
    return (
        <React.Fragment>
            <div className="sidebar">
                <ul className='navbar'>
                    <li className='link'>
                        <Link className='navlink'>
                            <span>Productos</span>
                        </Link>
                    </li>
                    <li className='link'>
                        <Link className='navlink'>
                            <span>Regiones</span>
                        </Link>
                    </li>
                    <li className='link'>
                        <Link className='navlink'>
                            <span>Usuarios</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}

export default Sidebar;