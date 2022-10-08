import React, { useLayoutEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';

import Cart from './Pages/Cart';
import Contacts from './Pages/Contacts';
import FAQ from './Pages/FAQ';
import Home from './Pages/Home';
import HowToClik from './Pages/HowToClik';
import OrderCheckout from './Pages/OrderCheckout';
import ProductDetails from './Pages/ProductDetails';
import Shop from './Pages/Products';
import Profile from './Pages/Profile';
import ThankyouComponent from './Pages/Thankyou';
import Compatibility from './Pages/Compatibility';
import { useLocation } from 'react-router-dom';

const Wrapper = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};
const AppRoutes = () => {
  return (
    <Router>
      <Wrapper>
        <>
          <Header />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/howToClik" element={<HowToClik />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contacts" element={<Contacts home />} />
            <Route path="/compatibility" element={<Compatibility />} />

            <Route path="/ProductDetails/:id" element={<ProductDetails />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/OrderCheckout" element={<OrderCheckout />} />
            <Route path="/thankyou" element={<ThankyouComponent />} />
            <Route path="/Profile/:id" element={<Profile />} />
            <Route path="*" element={<Navigate replace to="/home" />} />
          </Routes>
          <Footer />
        </>
      </Wrapper>
    </Router>
  );
};

export default AppRoutes;
