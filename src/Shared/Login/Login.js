import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, sendPasswordResetEmail, signOut } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { AuthContext } from '../../contexts/UserContext';
import setToken from '../../api/setToken';

const auth = getAuth(app);
const Login = () => {
    const { user, signIn, googleSignIn, gitSignIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [passwordError, setPasswordError] = useState('')
    const [userEmail, setEmail] = useState('')
    const logIn = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                setToken(result.user);
                navigate(from, { replace: true });
                // console.log(data);
            })
            .catch(error => {
                setPasswordError(error.message)
            })
    }

    const googleSignInHandle = () => {
        googleSignIn(googleProvider)
            .then((result) => {
                setToken(result.user);
                navigate(from, { replace: true });
                // console.log(data.accessToken);
                
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
    const resetPassword = () => {
        if (!userEmail) {
            alert('Please Enter Your Registered Email')
            return;
        }
        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                alert('Password rest link sent! Please Check Your Email')
            })
            .catch(error => {
                console.error("Error:", error);
                setPasswordError(error.message)
            })
    }
    const signOutHandle = () => {
        signOut(auth)
            .then(() => {
            })
            .catch(() => {
            })
    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/vq3qSgs/hero-bg.jpg")` }}>
            {
                user?.uid ?
                    <div>
                        <p className='text-success'>Logged In</p>
                        <button onClick={signOutHandle}>Sign Out</button>
                    </div>
                    :
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left pl-10">
                            <h1 className="text-5xl text-white font-bold">Social Login</h1>
                            <div className='d-flex my-3'>
                                <button onClick={googleSignInHandle} className="my-2 btn btn-block btn-success">Google Sign In</button>
                                <button onClick={gitSignInHandle} className="my-2 btn btn-block">GitHub Sign In</button>
                            </div>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <Form onSubmit={logIn} className="my-4">
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
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                </Form>
                                <p className="label"> Not a user?
                                    <Link to='/register' className="btn btn-sm btn-outline btn-error">Register</Link>
                                </p>
                                <p className="label">Forgot password?
                                    <button onClick={resetPassword} className="btn btn-sm btn-outline btn-error">Reset</button>
                                </p>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Login;