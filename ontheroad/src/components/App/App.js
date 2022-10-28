import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Error404 from '../Error404/Error404';
import Dashboard from '../Dashboard/Dashboard';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  );
}

export default App;
