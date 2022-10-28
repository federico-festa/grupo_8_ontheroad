import React from 'react';
import '../Header/Header.css';
import logo from '../../assets/On-The-Road-Media-Logo.png';

function Header() {
    return (
        <React.Fragment>
            <div className='header'>
                <div className="headerLeft">
                    <img className="logo" src={logo} alt="logo" />
                    <div className="brand">
                        <h1>On the road</h1>
                        <h2>experiencias de viaje alternativas</h2>
                    </div>
                </div>
                <div className='headerCenter'>
                    <div className='title'>
                        <h1 className='dashboard'>Dashboard</h1>
                    </div>
                </div>
                <div className="headerRight">
                    <div className="usercont">
                        <p className="user"></p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header;