import React from 'react';
import '../Footer/Footer.css';
import logofooter from '../../assets/On-The-Road-Media-Logo.png';

function Footer() {
    return (
        <React.Fragment>
            <div className="footer">
                <img className="logofooter" src={logofooter} alt='logo'/>
                <p>Copyright © 2022 On the road S.R.L</p>
            </div>
        </React.Fragment>
    );
}

export default Footer;