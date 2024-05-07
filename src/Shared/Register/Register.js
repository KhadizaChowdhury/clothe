import React, { useContext, useState } from 'react';
import { getAuth, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import app from '../../firebase/firebase.config';
import { BsGoogle, BsGithub } from 'react-icons/bs';
import setToken from '../../api/setToken';

const auth = getAuth(app);
const Register = () => {
    const { user, createUser, updateUser, googleSignIn, gitSignIn } = useContext(AuthContext);
    // console.log(createUser);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [passwordError, setPasswordError] = useState('')
    const [userEmail, setEmail] = useState('')
    const [success, setSuccess] = useState(false)

    const reg = (event) => {
        event.preventDefault();
        // setSuccess(false);
        const form = event.target;
        const name = form.name.value;
        const userType = form.user_type.value;
        const email = form.email.value;
        const image = form.image.files[0];
        const password = form.password.value;

        const formData = new FormData();
        formData.append('image', image);
        //7e5e4ec86f729a1188d12ffd55ac14b6

        const url = `https://api.imgbb.com/1/upload?key=7e5e4ec86f729a1188d12ffd55ac14b6`

        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.data.display_url);

                createUser(email, password)
                    .then(result => {
                        updateUser(name, data.data.display_url);
                        setToken(result.user);
                        //console.log(user);
                        setSuccess(true);
                        form.reset();
                        navigate(from, { replace: true });
                    })
                    .catch(error => {
                        setPasswordError(error.message)
                    })
            })

        //Validate Password 
        if (!/(?=(.*[A-Z]))(?=(.*[0-9]){2,})/.test(password)) {
            setPasswordError('Password should be 6 characters with at least 2 uppercase letters & 2 numbers')
            return;
        }
        setPasswordError('');

    }

    const googleSignInHandle = () => {
        googleSignIn(googleProvider)
            .then((result) => {
                setToken(result.user);
                // console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error("Error:", error);
            })
    }

    const gitSignInHandle = () => {
        gitSignIn(gitHubProvider)
            .then((result) => {
                setToken(result.user);
                // console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error("Error:", error);
            })
    }
    const emailHandle = (event) => {
        const email = event.target.value;
        setEmail(email);
    }

    return (
        <div className="hero min-h-screen bg-base-200">

            {
                user?.uid ?
                    <div>
                        <p className='my-2 btn btn-block btn-success'>User Created Successfully</p>
                    </div>
                    :
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left ml-12">
                            <h1 className="text-5xl font-bold">Register Now!</h1>
                            <div className='d-flex my-3 text-4xl'>
                                <button onClick={googleSignInHandle} className="m-2"><BsGoogle/></button>
                                <button onClick={gitSignInHandle} className="m-2"><BsGithub/></button>
                            </div>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <Form onSubmit={reg} className="my-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input name="name" type="text" placeholder="name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">User Image</span>
                                        </label>
                                        <input type="file" className="file-input file-input-bordered w-full max-w-xs" name="image" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input onBlur={emailHandle} name="email" type="text" placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                        {
                                            passwordError &&
                                            <div className="alert alert-warning shadow-lg my-4">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                                    <span>{passwordError}</span>
                                                </div>
                                            </div>
                                        }

                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text">Seller</span>
                                            <input type="radio" name="user_type" className="radio checked:bg-red-500" checked />
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text">Buyer</span>
                                            <input type="radio" name="user_type" className="radio checked:bg-blue-500" checked />
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Register Now</button>
                                    </div>
                                </Form>
                                <p className="label"> Already a member?
                                    <Link to='/login' className="btn btn-sm btn-outline btn-error">Sign In</Link>
                                </p>
                            </div>
                        </div>
                    </div>
            }


        </div>
    );
};

export default Register;