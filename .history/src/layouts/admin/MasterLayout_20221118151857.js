import React from 'react'; 

import '../../assests/admin/css/styles'; 

import Navbar from './Navbar'; 
import Sidebar from './Sidebar';
import Footer from './Footer'; 

const MasterLayout =() =>{
    <div className='sb-nav-fixed'>
    <Navbar />
    <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <Sidebar/> 
            </div>

            <div id="layoutSidenav_content">
            <main>

            </main>
                <Footer /> 
            </div>

    </div>

</div>

}

export default MasterLayout; 