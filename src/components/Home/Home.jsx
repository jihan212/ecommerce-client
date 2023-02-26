import React from 'react';
import Banner from './Banner';
import BigSale from './BigSale';
import Collection from './Collection';
import FeaturedProduct from './FeaturedProduct';
import Header from '../Header';
import Footer from '../Footer';

const Home = () => {
	return (
		<div className='site-wrap'>
			<Header />
			<Banner />
			<Collection />
			<FeaturedProduct />
			<BigSale />
			<Footer />
		</div>
	);
};

export default Home;
