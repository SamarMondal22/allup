import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router , Route, Routes, Navigate } from 'react-router-dom';

import Header from './Pages/Layout/Header/Header';
import Register from './Pages/Auth/Register/Register';
import Login from './Pages/Auth/Login/Login';
import Home from './Pages/Cms/Home/Home';
import Footer from "./Pages/Layout/Footer/Footer";
import "./App.css";
import Profile from './Pages/Cms/Profile/Profile';
import About from './Pages/Cms/About/About';
import Contact from "./Pages/Cms/Contact/Contact";
import ProductAdd from './Pages/Cms/Product/ProductAdd/ProductAdd';
import ProductShow from './Pages/Cms/Product/ProductShow/ProductShow';
import ProductDetails from './Pages/Cms/Product/ProductDetails/ProductDetails';

export default function App() {

  const [cmnLayout, setCmnLayout] = useState(false);
  

  const PrivateRoute = ({children}) =>{
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    setCmnLayout(true);
    
    return token !== null && token !== undefined ? (children) : <Navigate to="/login" />
  }

  const privateRouterName = [
    {path:"/home", element: <Home /> },
    {path:"/profile", element: <Profile /> },
    {path:"/about", element: <About /> },
    {path:"/contact", element: <Contact /> },
    {path:"/productadd", element: <ProductAdd /> },
    {path:"/productshow", element: <ProductShow /> },
    {path:"/productdetails/:id", element: <ProductDetails /> },
  ]
  
  const publicRouterName = [
    {path:"/", element:<Register />},
    {path:"/login", element:<Login />}
  ]

  
  return (
    <>
      <Router>
          <Header cmnLayout={cmnLayout} cmnLayoutFunc={setCmnLayout} />
          <Routes>
            {
              publicRouterName?.map((ele,index) =>(
                <Route key={index} path={ele.path} element={ele.element} />
              ))
            }
            {
              privateRouterName?.map((ele, index) => (
                <Route key={index} path={ele.path} element={<PrivateRoute>{ele.element}</PrivateRoute>}/>
              ))
            }
          </Routes>
          <Footer cmnLayout={cmnLayout} />
      </Router>
    </>
  )
};
