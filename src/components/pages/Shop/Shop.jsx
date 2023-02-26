import React from 'react';
import Header from '../../Header';
import TopNav from '../../TopNav';
import Layouts from './Layout/Layouts';
import Collection from '../../Collection';
import Footer from '../../Footer';

const Shop = () => {
	return (
		<div className='site-wrap'>
			<Header />
			<TopNav />
			<div className='site-section'>
				<div className='container'>
					<Layouts />
					<Collection />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Shop;
