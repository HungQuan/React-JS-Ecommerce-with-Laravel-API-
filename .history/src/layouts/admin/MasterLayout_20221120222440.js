import React from 'react'; 

import {Routes, Route, Outlet, Navigate} from 'react-router-dom'; 

import '../../assests/admin/css/styles.css'; 
import '../../assests/admin/js/scripts'; 

import Navbar from './Navbar'; 
import Sidebar from './Sidebar';
import Footer from './Footer'; 
import routes from '../../routes/routes';

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
                 
                 <Outlet/>
                 
                
                 </main>
                     
                <Footer/>
                </div>
            </div>    
        </div>

    );
}

export default MasterLayout; 