import React from 'react';
import './Main.css'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet className='container mx-auto'></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;