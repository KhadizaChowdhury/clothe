import React from 'react';

const Hero = () => {
    return (
        <div className="min-h-screen bg-base-200 flex flex-row">
            <div className="container mx-auto py-20 p-8 lg:p-0 md:flex flex-row lg:flex-row-reverse justify-between items-center">
                <div className='basis-full md:basis-1/5 lg:basis-1/4'>
                    <img src="https://i.ibb.co/sgcxvLg/hero-img.jpg" alt="hero-img"/>
                </div>
                <div className='basis-full md:basis-3/5 lg:basis-3/5'>
                    <h1 className="text-2xl md:text-5xl font-bold">Shop Responsibly and Stylishly!</h1>
                    <p className="py-6">Welcome to our platform where you Here you can buy and sell pre-owned luxury fashion items with ease. Our platform offers the most sought-after designer brands, all authenticated by our team of experts. We're more than just a marketplace - we're a community of style-savvy individuals who value sustainability. Join us in our mission to make fashion more sustainable and shop guilt-free today.</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;