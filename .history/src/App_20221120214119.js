import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MasterLayout from './layouts/admin/MasterLayout';
import Home from "./components/frontend/Home";
import Dashboard from "./components/admin/Dashboard";
import Profile from "./components/admin/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route  path="/admin" name="Admin" render={(props) => <MasterLayout {...props} />}/>  
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;