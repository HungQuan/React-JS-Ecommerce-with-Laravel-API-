import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MasterLayout from './layouts/admin/MasterLayout';
import Home from "./components/frontend/Home";
import Dashboard from "../components/admin/Dashboard";
import Profile from "../components/admin/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/admin" element={<MasterLayout />} > 
        <Route path='/admin/dashboard' element={<Dashboard />}/>
        <Route path='/admin/profile' element={<Profile />}/>
        </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;