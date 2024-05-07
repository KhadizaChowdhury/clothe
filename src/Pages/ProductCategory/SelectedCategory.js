import React, { useEffect, useState } from 'react';
import BookNow from './BookNow/BookNow';
import Card from '../../components/Card';
import { Link, useLoaderData } from 'react-router-dom';

const SelectedCategory = () => {
    const categories =useLoaderData();
    const { cat_id } = categories;
    console.log(categories)
    const [products, setProducts] = useState([]);
    const [product_Item, setProduct] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/category/${cat_id}`)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [cat_id])
    return (
        <div className='container'>
            <div className='my-20 flex flex-row gap-4'>
                <div className='basis-[85%]'>
                    <div className="grid grid-cols-3 gap-5">
                        {
                            categories.map(category =>
                            <Card
                                key={category._id}
                                product={category}
                                setProduct={setProduct}
                            ></Card>)
                        }
                    </div>
                    {
                        product_Item &&
                        <BookNow
                            product_Item={product_Item}>
                        </BookNow>
                    }
                </div>
                <div className='basis-[15%]'>
                </div>
            </div>
        </div>
    );
};

export default SelectedCategory;