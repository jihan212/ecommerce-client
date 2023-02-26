import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/pages/Home/Home';
import About from '../components/pages/About/About';
import Shop from '../components/pages/Shop/Shop';
import Cart from '../components/pages/Cart/Cart';
import Checkout from '../components/pages/Checkout/Checkout';
import Contact from '../components/pages/Contact/Contact';
import SingleProduct from '../components/pages/SingleProduct/SingleProduct';
import ThankYou from '../components/pages/ThankYou/ThankYou';

const Routing = () => {
	return (
		<>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				></Route>
				<Route
					path='/about'
					element={<About />}
				></Route>
				<Route
					path='/shop'
					element={<Shop />}
				></Route>
				<Route
					path='/cart'
					element={<Cart />}
				></Route>
				<Route
					path='/checkout'
					element={<Checkout />}
				></Route>
				<Route
					path='/contact'
					element={<Contact />}
				></Route>
				<Route
					path='/singleproduct'
					element={<SingleProduct />}
				></Route>
				<Route
					path='/thankyou'
					element={<ThankYou />}
				></Route>
			</Routes>
		</>
	);
};

export default Routing;
