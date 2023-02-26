import React from 'react';
import Header from '../../Header';
import Banner from './Banner';
import TheTeam from './TheTeam';
import TopNav from '../../TopNav';
import Service from '../../Service';
import Footer from '../../Footer';

const About = () => {
	return (
		<div className='site-wrap'>
			<Header />
			<TopNav />
			<Banner />
			<TheTeam />
			<Service />
			<Footer />
		</div>
	);
};

export default About;
