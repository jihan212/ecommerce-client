import React from 'react';
import Header from '../../Header';
import TopNav from '../../TopNav';
import SingleProductBody from './SingleProductBody';
import FeaturedProduct from '../../pages/Home/FeaturedProduct';
import Footer from '../../Footer';

const SingleProduct = () => {
	return (
		<>
			<Header />
			<TopNav />
			<SingleProductBody />
			<FeaturedProduct />
			<Footer />
		</>
	);
};

export default SingleProduct;
