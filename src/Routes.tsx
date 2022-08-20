import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Header from './Components/Header';
import Cart from './Pages/Cart';
import Contacts from './Pages/Contacts';
import FAQ from './Pages/FAQ';
import Home from './Pages/Home';
import HowToClik from './Pages/HowToClik';
import OrderCheckout from './Pages/OrderCheckout';
import ProductDetails from './Pages/ProductDetails';
import Shop from './Pages/Products';
import Profile from './Pages/Profile';

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/howToClik" element={<HowToClik />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/OrderCheckout" element={<OrderCheckout />} />
        <Route path="/Profile/:id" element={<Profile />} />
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
