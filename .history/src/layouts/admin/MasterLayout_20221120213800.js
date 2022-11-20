import React from 'react'; 

import {Routes, Route, Navigate, Outlet, Router} from 'react-router-dom'; 

import '../../assests/admin/css/styles.css'; 
import '../../assests/admin/js/scripts'; 

import Navbar from './Navbar'; 
import Sidebar from './Sidebar';
import Footer from './Footer'; 

import routes from '../../routes/routes';

const MasterLayout = () => (
    <div className="sb-nav-fixed">
      <Navbar />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Sidebar />
        </div>
        <div id="layoutSidenav_content">
          <main>
          <Router>
                        <Routes>
                            {routes.map((route, idx) => {

                                return (

                                    route.component && (

                                        <Route

                                            key={idx}
                                            path={route.path}
                                            exact={route.exact}
                                            name={route.name}
                                            render={(props) => (
                                                <route.component {...props} />
                                            )}
                                        />
                                    )

                                )

                            })}
                        </Routes>
                        </Router>
                        <Navigate from="/admin" to="/admin/dashboard"/>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );

export default MasterLayout;