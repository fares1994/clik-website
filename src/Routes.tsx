import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import OrderCheckout from './Pages/OrderCheckout';
import ProductDetails from './Pages/ProductDetails';
import Products from './Pages/Products';
import Profile from './Pages/Profile';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/OrderCheckout" element={<OrderCheckout />} />
        <Route path="/Profile/:id" element={<Profile />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
