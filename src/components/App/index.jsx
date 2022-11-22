import React, { Fragment } from "react";
import NavBar from '../NavBar';
import Home from '../../pages/Home'
import Product from '../../pages/Product';
import Browse from '../../pages/Browse'
import ShoppingCart from '../../pages/ShoppingCart'
import ShippingDoaPolicy from "../../pages/ShippingDoaPolicy";
import FAQ_Page from "../../pages/FAQ_Page";
import AboutUs from "../../pages/AboutUs";
import ContactUs from "../../pages/ContactUs";
import PageNotFound from "../../pages/PageNotFound";
import SearchResultsPage from "../../pages/SearchResults";
import ShippingPage from "../../pages/Shipping";
import OrderConfirmationPage from "../../pages/OrderConfirmation";
import PrivacyPolicy from "../../pages/PrivacyPolicy";
import TermsConditions from "../../pages/TermsConditions";
import Footer from "../Footer";
import '../../themes/findfins.less';
import "./App.css";
import { Route, Routes, Router } from 'react-router-dom';

function App() {
  // About, Terms, and Contact components still need to be created
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/shipping-doa-policy" element={<ShippingDoaPolicy />} />
        <Route path="/FAQ" element={<FAQ_Page />} />
        <Route path="/about-us" element={<AboutUs />} />
        {/* <Route path="/terms" element={<Home />} /> */}
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/browse/:category/:subcategory" element={<Browse />} />
        {/* <Route exact path="/product" element={<Product />} /> */}
        <Route exact path="/product/:id/:product_name" element={<Product />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/shipping" element={<ShippingPage />} />
        <Route path="/search-results" element={<SearchResultsPage />} />
        <Route path="/order-confirmed" element={<OrderConfirmationPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;