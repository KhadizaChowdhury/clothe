import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import { FaUserAlt } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [selectedOption, setSelectedOption] = useState('user');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    //console.log(user)
    const signOutHandle = () => {
        logOut()
            .then(() => { })
            .catch(() => {
            })
    }
    return (
        <div className='bg-base-100'>
            <div className="navbar container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link>Item 1</Link></li>
                        <li tabIndex={0}>
                            <Link className="justify-between">
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </Link>
                            <ul className="p-2">
                                <li><Link>Submenu 1</Link></li>
                                <li><Link>Submenu 2</Link></li>
                            </ul>
                        </li>
                        <li><Link>Item 3</Link></li>
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link>Item 1</Link></li>
                    <li tabIndex={0}>
                        <Link>
                            Parent
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </Link>
                        <ul className="p-2">
                            <li><Link>Submenu 1</Link></li>
                            <li><Link>Submenu 2</Link></li>
                        </ul>
                    </li>
                    <li><Link>Item 3</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </label>
                    <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar placeholder">
                        <div className="w-10 rounded-full bg-neutral-focus text-neutral-content">
                            {
                                user?.photoURL ?
                                    <img src={user.photoURL} alt='' />
                                      :
                                    <FaUserAlt style={{ 'color': '#fff' }} />
                            }
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            {/* <Link to='/' className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link> */}
                                <div>
                                    <label>
                                        <input
                                            type="radio"
                                            value="user"
                                            checked={selectedOption === 'user'}
                                            onChange={handleOptionChange}
                                        />
                                        User
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            value="seller"
                                            checked={selectedOption === 'seller'}
                                            onChange={handleOptionChange}
                                        />
                                        Seller
                                    </label>
                                </div>
                        </li>
                            <li><Link to='/dashboard'>Dashboard</Link></li>
                        {user?.uid ?
                            <li>
                                <button onClick={signOutHandle}>Sign Out</button>
                            </li> :
                            <li>
                                <Link to={`/login`}>Log In</Link>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Header;