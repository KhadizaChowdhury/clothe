import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const AddProduct = () => {
    const [products, setProducts] = useState([]);
    const { user } = useContext(AuthContext);

    function handleAdd(event) {
        event.preventDefault();
        const form = event.target;
        const serviceName = form.serviceName.value;
        const price = form.price.value;
        const image = form.image.value;
        const description = form.description.value;
        const newProducts = {
            serviceName: serviceName,
            price: price,
            rating: '',
            image: image,
            description
        };
        fetch('https://service-review-server-silk.vercel.app/service', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProducts),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.acknowledged === true) {
                    alert("Successfully added");
                    setProducts([...products, newProducts]);
                }
            })
            .catch((error) => {
                alert(error);
                console.error('Error:', error);
            });
    }
    return (
        <div className="hero min-h-screen bg-base-200 py-10">
            {
                user?.uid &&
                <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left lg:ml-8">
                            <h1 className="text-3xl md:text-5xl font-bold">Add New<br />Product!</h1>
                    </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-violet-400 to-fuchsia-400">
                        <div className="card-body p-0 md:p-8">
                            <form onSubmit={handleAdd}>
                                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                    <div className="card-body">
                                        <div className="form-control">
                                            <input type="name" placeholder="serviceName" className="input input-bordered w-full max-w-xs" name="serviceName" required />
                                        </div>
                                        <div className="form-control">
                                                <input type="number" min="1" placeholder="price" className="input input-bordered" name="price" required />
                                        </div>
                                        <div className="form-control">
                                            <textarea className="textarea textarea-bordered" placeholder="Bio" name="description" required></textarea>
                                        </div>
                                        <div className="form-control">
                                            <input type="file" className="file-input file-input-bordered w-full max-w-xs" name="image" />
                                        </div>
                                        <div className="form-control mt-6">
                                            <button className='btn' disabled={!user}> Add New Product
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default AddProduct;