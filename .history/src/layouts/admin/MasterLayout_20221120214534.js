import React from 'react';
import {Outlet, Navigate} from 'react-router-dom';
import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts.js';

import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';



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
                    <Outlet/>
                    <Navigate from="admin" to="/admin/dashboard"/> 

                </main>
                <Footer/>
                </div>
            </div>    
        </div>

    );
}

export default MasterLayout;