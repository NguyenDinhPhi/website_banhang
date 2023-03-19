import React from "react";
import {Routes , Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Login from "../pages/Login"
import All from "../pages/All";
import ProductDetail from "../pages/ProductDetail";
const Router = () => {
  return <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/all" element={<All />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product_detail" element={<ProductDetail/>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  
};

export default Router;


