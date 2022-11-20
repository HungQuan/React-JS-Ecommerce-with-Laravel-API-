import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from 'src\components\frontend\Home.js'
import MasterLayout from './layouts/admin/MasterLayout';
import Dashboard from './components/admin/Dashboard';
import Profile from './components/admin/Profile';


    function App() {
  return (
    <div className="App">
      <Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/admin" element={<MasterLayout />} />  
    
  </Routes>
</Router>
    </div>
  );
}

export default App;