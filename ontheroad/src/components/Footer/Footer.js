import React from 'react';
import '../Header/Header.css';
import logo from '../../assets/On-The-Road-Media-Logo.png';

function Footer() {
    return (
        <React.Fragment>
            <div className="footer">
                <img className="logofooter" src={logo} />
                <p>Copyright © 2022 On the road S.R.L</p>
            </div>
        </React.Fragment>
    );
}

export default Footer;