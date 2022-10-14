import React from 'react';

import logo from '../../assets/On-The-Road-Media-Logo.png';

function Header() {
    return (
        <header>
            <div class="headerLeft">
                <img class="logo" src={logo} alt="logo" />
                <div class="brand">
                    <h1>On the road</h1>
                    <h2>experiencias de viaje alternativas</h2>
                </div>
            </div>
            <div class="headerRight">
                <div class="usercont">
                    <p class="user">Hola</p>
                </div>
            </div>
            <script src="/js/header.js"></script>
        </header>
    );
}

export default Header;