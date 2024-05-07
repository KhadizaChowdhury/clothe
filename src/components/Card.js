import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ setProduct, product }) => {
    const { _id, productName, location, category, seller, description, image, condition, original_price, resale_price, years_of_use } = product;

    function TextLimit({ description, limit }) {
        if (description.length <= limit) {
            return <span>{description}</span>;
        } else {
            return <span>{description.slice(0, limit)}...</span>;
        }
    }

    return (
        <div>
            <div className="p-5 pt-7 pb-12 text-left transform duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
                <figure className="h-48">
                    <img className='h-full' src={image} alt="Shoes" />
                </figure>
                <div className="flex justify-between items-center mt-5">
                    {seller &&
                        <div>
                            <span className=''>
                                Seller-
                            </span>
                            <span className='ml-2'>
                                {seller}
                            </span>
                        </div>
                    }
                    <div className="badge badge-outline">{condition}</div>
                </div>
                <div className="flex justify-between items-center mt-1 mb-5">
                    <div className="badge text-white">
                        {location}</div>
                    <div>
                        {years_of_use &&
                            <span className="mr-1 mb-2 mt-2 text-black-600">
                                {years_of_use} used
                            </span>
                        }
                    </div>  
                </div>
                {productName.length>22 ?
                    <h2 className="font-semibold text-xl h-10">
                        {productName.slice(0, 22)} ...
                    </h2>:
                    <h2 className="font-semibold text-xl h-10">
                        {productName}
                    </h2>
                }
                {description &&
                    <p className="mb-5">{description.slice(0, 80)} ...</p>
                }
                <h2 className="font-semibold mb-5">
                    <span className="mr-2 line-through text-gray-400">৳{original_price}</span>{resale_price} BDT</h2>
                <button>
                    <label
                        htmlFor="booking-now"
                        className="p-2 px-6 bg-red-500 text-white rounded-md hover:bg-red-600"
                        onClick={() => setProduct(product)}
                    >Book now</label>
                </button>
            </div>
        </div>
    );
};

export default Card;