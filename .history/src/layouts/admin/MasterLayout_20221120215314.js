import React from 'react'; 

import {Outlet, Navigate} from 'react-router-dom'; 

import '../../assests/admin/css/styles.css'; 
import '../../assests/admin/js/scripts'; 

import Navbar from './Navbar'; 
import Sidebar from './Sidebar';
import Footer from './Footer'; 


const MasterLayout = ()=>{
    return (
        <div className="sb-nav-fixed">
            <Navbar/>

            <div id="layoutSidenav">
            
                <div id="layoutSidenav_nav">
                    <Sidebar/>
                </div>

                <div id="layoutSidenav_content">
                <main>
              
                    <Router>
                        <Routes>
                            
                        </Routes>
                        </Router>
                        <Navigate from="/admin" to="/admin/dashboard"/>

                    </main>
                     
                <Footer/>
                </div>
            </div>    
        </div>

    );
}

export default MasterLayout; 