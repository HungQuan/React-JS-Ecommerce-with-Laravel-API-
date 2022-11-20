import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MasterLayout from './layouts/admin/MasterLayout';
import Dashboard from "./components/admin/Dashboard";
import Profile from "./components/admin/Profile";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
       
          <Route path ="/admin/dashboard" component = {MasterLayout}
        </Routes>
      </Router>
    </div>
  );
};

export default App;