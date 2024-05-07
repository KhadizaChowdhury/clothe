import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from '../layouts/Main';
import Home from '../Pages/Home/Home';
import NotFound from '../Shared/NotFound/NotFound';
import Login from '../Shared/Login/Login';
import Register from '../Shared/Register/Register';
import SelectedCategory from '../Pages/ProductCategory/SelectedCategory';
import ProtectedRoutes from './ProtectedRoutes';
import DashBoard from '../Pages/Dashboard/DashBoard';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/category/:cId',
                element:
                <ProtectedRoutes>
                    <SelectedCategory></SelectedCategory>
                </ProtectedRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.cId}`)
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/dashboard",
                element: <DashBoard></DashBoard>
            },
        ]
    },
    {
        path: "*",
        element: <NotFound></NotFound>,
    },
]);