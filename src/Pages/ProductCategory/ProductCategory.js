import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import BookNow from './BookNow/BookNow';

const ProductCategory = ({ categories }) => {
    const { cat_id } = categories;
    //console.log(categories)
    const [products, setProducts] = useState([]);
    const [product_Item, setProduct] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/?category_id=${cat_id}`)
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
                            products.map(product =>
                                <Card
                                    key={product._id}
                                    product={product}
                                    setProduct={setProduct}
                                ></Card>
                            )
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

export default ProductCategory;