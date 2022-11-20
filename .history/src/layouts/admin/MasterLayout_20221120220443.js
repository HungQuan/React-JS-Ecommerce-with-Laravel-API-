import React from 'react'; 

import {Routes, Route, Router, Component, Outlet, Navigate} from 'react-router-dom'; 

import '../../assests/admin/css/styles.css'; 
import '../../assests/admin/js/scripts'; 

import Navbar from './Navbar'; 
import Sidebar from './Sidebar';
import Footer from './Footer'; 


const MasterLayout = ()=>{
    return (
        <div className="sb-nav-fixed">
            <Navbar />

            <div id="layoutSidenav">
            
                <div id="layoutSidenav_nav">
                    <Sidebar/>
                </div>

                <div id="layoutSidenav_content">
                <main>
          <Routes>
            {routes.filter(route => route.component)
              .map(({ path, component: Component }, idx) => (
                <Route
                  key={idx}
                  path={path}
                  element={<Component />}
                />
              ))}
            <Route
              path="/admin"
              element={<Navigate to="/admin/dashboard"/>}
            />
          </Routes>
        </main>
                     
                <Footer/>
                </div>
            </div>    
        </div>

    );
}

export default MasterLayout; 