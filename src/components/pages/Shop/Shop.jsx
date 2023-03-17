import React from 'react';
import Header from '../../Header';
import TopNav from '../../TopNav';
import BigColumn from './Layout/BigColumn';
import SmallColumn from './Layout/SmallColumn';
import Collection from '../../Collection';
import Footer from '../../Footer';

const Shop = () => {
	return (
		<div className='site-wrap'>
			<Header />
			<TopNav />
			<div className='site-section'>
				<div className='container'>
					<div className='row mb-5'>
						<BigColumn />
						<SmallColumn />
					</div>
					<Collection />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Shop;
