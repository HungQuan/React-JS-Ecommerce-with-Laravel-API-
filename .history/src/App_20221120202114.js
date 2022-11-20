import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MasterLayout from './layouts/admin/MasterLayout';


function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
       
          <Route exact path="/admin" name ="Admin" render ={(props)=> <MasterLayout{...props} />}  />
        </Routes>
      </Router>
    </div>
  );
};

export default App;