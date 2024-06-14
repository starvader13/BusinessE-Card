import React from "react";

const Home = React.lazy(()=>import ("../components/Home/Home.jsx"));
const Create = React.lazy(()=>import ("../components/Create/Create.jsx"));
const Cards = React.lazy(()=>import ("../components/Cards/Cards.jsx"));
const Update = React.lazy(()=>import ("../components/Update/Update.jsx"));
const Delete = React.lazy(()=>import ("../components/Delete/Delete.jsx"));
const Signup = React.lazy(()=>import ("../components/Signup/Signup.jsx"));
const Login = React.lazy(()=>import ("../components/Login/Login.jsx"));

export default [
    {
        element: Home,
        path: "/"
    },
    {
        element: Create,
        path: "/create-card"
    },
    {
        element: Cards,
        path: "/cards"
    },
    {
        element: Update,
        path: "/update-card"
    },
    {
        element: Delete,
        path: "/delete-card"
    },
    {
        element: Signup,
        path: "/sign-up"
    },
    {
        element: Login,
        path: "/log-in"
    }
]
