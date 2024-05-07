import React, { useEffect, useState } from 'react';
import ProductCategory from './ProductCategory';
import { Link } from 'react-router-dom';

const Category = () => {
    const [categories, setCategories] = useState([]);
    console.log(categories)

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div className='container product_cat'>
            {
                categories.map(category =>
                    <div className="btn-group btn-group-vertical lg:btn-group-horizontal mt-10 mx-1" key={category._id}>
                        <Link to={`/category/${category.cat_id}`} className="btn"
                        >{category.name}</Link>
                    </div>
                 )
            }
            <ProductCategory
                key={categories.cat_id}
                categories={categories}
            ></ProductCategory>
        </div>
    );
};

export default Category;