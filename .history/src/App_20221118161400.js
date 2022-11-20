import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MasterLayout from './layouts/admin/MasterLayout';


function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
        <Route path = "/admin/dashboard" element = {<MasterLayout/>} />
        <Route exact path = "/admin/dashboard" element = {<Dashboard/>} />
        <Route exact path = "/admin/profile" element = {<Profile/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;