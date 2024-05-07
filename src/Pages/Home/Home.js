import React from 'react';
import Category from '../ProductCategory/Category';
// import Products from '../Products/Products';
import Hero from './Hero';

const Home = () => {
    
    return (
        <div className='overflow-x-hidden'>
            <Hero></Hero>
            <Category></Category>
            {/* <Products></Products> */}
        </div>
    );
};

export default Home;