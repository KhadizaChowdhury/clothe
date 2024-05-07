import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='hero min-h-screen bg-dark d-flex align-items-center'
            style={{ backgroundImage: `url("https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg?w=900&t=st=1687214586~exp=1687215186~hmac=275f76e4da83e3027f34a13d5340e46bf2143f6b720807c9751a23d3edf79974")` }}>
            <div className='container text-white text-center'>
                <div className='mt-3'>
                    <Link to={'/'}><button type="button" class="btn btn-light">Go to Home Page</button></Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;