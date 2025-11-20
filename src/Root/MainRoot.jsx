import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainRoot = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar> 
            <div className="flex-1 mb-20">
            <Outlet></Outlet> 
            </div>
           
           <Footer></Footer>

        </div>
    );
};

export default MainRoot;