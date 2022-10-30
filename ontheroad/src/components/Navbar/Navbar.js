import React from 'react';
import '../Navbar/Navbar.css';
import { Link, Routes, Route } from 'react-router-dom';

import Content from '../Content/Content.js';
import Error404 from '../Error404/Error404.js';

function Sidebar() {
    return (
        <React.Fragment>
            <div className="topnav">
                <ul className='navbar'>
                    <li className='link'>
                        <Link className='navlink' to='/products'>
                            <span className='text'>Productos</span>
                        </Link>
                    </li>
                    <li className='link'>
                        <Link className='navlink' to='/regions'>
                            <span className='text'>Regiones</span>
                        </Link>
                    </li>
                    <li className='link'>
                        <Link className='navlink' to='/users'>
                            <span className='text'>Usuarios</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}

export default Sidebar;