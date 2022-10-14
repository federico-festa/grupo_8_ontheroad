import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';
import Error404 from '../Error404/Error404';
import Footer from '../Footer/Footer';

function App() {
  return (
    <Routes>
      <Route exact path="/">
        <Header />
        <Sidebar />
        <Footer />
        <Content />
      </Route>
      <Route component={Error404} />
    </Routes>
  );
}

export default App;
