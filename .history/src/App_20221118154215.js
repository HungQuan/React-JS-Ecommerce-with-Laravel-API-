import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import MasterLayout from './layouts/admin/MasterLayout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route>
              <Route path="/admin/dashboard" element={<MasterLayout />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
