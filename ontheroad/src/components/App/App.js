import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';
import Error404 from '../Error404/Error404';
import Footer from '../Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      <Content />
      <Footer />
    </React.Fragment>
  );
}

export default App;
