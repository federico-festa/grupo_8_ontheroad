import React from 'react';

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';

function Dashboard() {
    return (
        <React.Fragment>
            <Header />
            <Navbar />
            <Content />
            <Footer />
        </React.Fragment>
    );
}

export default Dashboard;