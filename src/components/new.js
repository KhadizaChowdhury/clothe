import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ setProduct, product }) => {
    const { _id, productName, title, category, seller, description, image, condition, resale_price, years_of_use } = product;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="h-64">
                    <img className='h-full' src={image} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {productName}{title}
                        {/* <div className="badge badge-secondary">{category}</div> */}
                        <div className="badge badge-secondary">{condition}</div>
                    </h2>
                    {description &&
                        <p>{description}</p>
                    }
                    <div className="card-actions justify-end">
                        {/* {condition &&
                    <div className="badge badge-outline">{condition}</div>
                    } */}
                        {years_of_use &&
                            <div className="badge badge-outline">{years_of_use}</div>
                        }
                    </div>
                    <label
                        htmlFor="booking-now"
                        className="btn btn-primary text-white"
                        onClick={() => setProduct(product)}
                    >Book now</label>
                </div>
            </div>
            <article className="mx-auto pb-5 max-w-sm transform duration-500 hover:-translate-y-1 cursor-pointer group">
                <div className="h-64 overflow-hidden">
                    <img className='h-full' src={image} alt="Shoes" />
                </div>
                <h2 className="text-xl mt-5">
                    <Link target="_blank" to="#">{productName}{title}</Link>
                </h2>
                <div className="flex justify-between my-3">
                    <div className="text-base text-right">
                        {seller}
                    </div>
                    <div className="badge badge-secondary text-base font-semibold">{condition}</div>
                </div>
                {description &&
                    <p>{description}</p>
                }
                <div className="flex justify-between items-center mt-3 ">
                    <div>Used
                        {years_of_use &&
                            <div className="badge badge-outline">{years_of_use}</div>
                        }
                    </div>
                    <div className="text-base text-right">
                        <label
                            htmlFor="booking-now"
                            className="btn btn-sm text-white"
                            onClick={() => setProduct(product)}
                        >Book now</label>
                    </div>
                </div>
            </article>
            <section className="p-5 py-12 text-left transform duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
                <div className="h-64 overflow-hidden">
                    <img className='h-64' src={image} alt="Shoes" />
                </div>
                <h2 className="font-semibold mb-2 mt-12 text-cyan-600">Popular Collection</h2>
                <h1 className="text-2xl mb-5 h-16">{productName}{title}</h1>
                <div className="space-x-1 flex mb-5">
                    <svg className="w-4 h-4 mx-px fill-current text-orange-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                        <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                    </svg>
                    <svg className="w-4 h-4 mx-px fill-current text-orange-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                        <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                    </svg>
                    <svg className="w-4 h-4 mx-px fill-current text-orange-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                        <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                    </svg>
                    <svg className="w-4 h-4 mx-px fill-current text-orange-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                        <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                    </svg>
                    <svg className="w-4 h-4 mx-px fill-current text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                        <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                    </svg>
                </div>
                {description &&
                    <p className="mb-5">{description}</p>
                }
                <h2 className="font-semibold mb-5">{resale_price} BDT</h2>
                <button className="p-2 px-6 bg-red-500 text-white rounded-md hover:bg-red-600">Add To Cart</button>
            </section>
        </div>
    );
};

export default Card;