import React from 'react';
import '../Navbar/Navbar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <React.Fragment>
            <div className="topnav">
                <ul className='navbar'>
                    <li className='link'>
                        <Link className='navlink'>
                            <span className='text'>Productos</span>
                        </Link>
                    </li>
                    <li className='link'>
                        <Link className='navlink'>
                            <span className='text'>Regiones</span>
                        </Link>
                    </li>
                    <li className='link'>
                        <Link className='navlink'>
                            <span className='text'>Usuarios</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}

export default Sidebar;