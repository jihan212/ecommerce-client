import React from 'react';
import Header from '../../Header';
import Banner from './Banner';
import BigSale from './BigSale';
import Collection from '../../Collection';
import FeaturedProduct from './FeaturedProduct';
import Footer from '../../Footer';
import Service from '../../Service';

const Home = () => {
	return (
		<div className='site-wrap'>
			<Header />
			<Banner />
			<Service />
			<Collection />
			<FeaturedProduct />
			<BigSale />
			<Footer />
		</div>
	);
};

export default Home;
