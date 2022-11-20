import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import MasterLayout from './layouts/admin/MasterLayout';
import Dashboard from './components/admin/Dashboard';
import Profile from './components/admin/Profile';

    function App() {
  return (
    <div className="App">
   <Router>
  <Routes>
    <Route path="/" element={<div>Default Page Content</div>} />
    
    <Route  path="/admin" name="Admin" render={(props) => <MasterLayout {...props} />}/>  
    </Routes>
</Router>
    </div>
  );
}

export default App;