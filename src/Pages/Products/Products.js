import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/`)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [])
    return (
        <div className='container'>
            <div className='my-20 flex flex-row gap-4'>
                <div className='basis-3/4'>
                    <div className="grid grid-cols-3 gap-10">
                        {
                            products.map(product =>
                                <Card
                                    key={product._id}
                                    product={product}
                                ></Card>
                            )
                        }
                    </div>
                </div>
                <div className='basis-1/4'>

                </div>
            </div>
        </div>
    );
};

export default Products;