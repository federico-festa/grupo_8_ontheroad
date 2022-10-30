import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Error404 from '../Error404/Error404.js';
import Dashboard from '../Dashboard/Dashboard.js';
import Header from '../Header/Header.js';
import Navbar from '../Navbar/Navbar.js'
import Footer from '../Footer/Footer.js';
import ContentProducts from '../Content/ContentProducts/ContentProducts.js';
import ContentRegions from '../Content/ContentRegions/ContentRegions.js';
import ContentUsers from '../Content/ContentUsers/ContentUsers.js';
import ProductsTotal from '../Content/ContentTotals/ProductsTotal/ProductsTotal.js';
import RegionsTotal from '../Content/ContentTotals/RegionsTotal/RegionsTotal.js';
import UsersTotal from '../Content/ContentTotals/UsersTotal/UsersTotal.js';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='*' element={<Error404 />} />
      <Route path='/products' element={[<Header />, <Navbar />, <ProductsTotal />, <ContentProducts />, <Footer />]} />
      <Route path='/regions' element={[<Header />, <Navbar />, <RegionsTotal />, <ContentRegions />, <Footer />]} />
      <Route path='/users' element={[<Header />, <Navbar />, <UsersTotal />, <ContentUsers />, <Footer />]} />
    </Routes>
  );
}

export default App;
