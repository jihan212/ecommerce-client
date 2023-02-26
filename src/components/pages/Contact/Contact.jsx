import React from 'react';
import Header from '../../Header';
import TopNav from '../../TopNav';
import Footer from '../../Footer';
import ContactForm from './ContactForm';

const Contact = () => {
	return (
		<div className='site-wrap'>
			<Header />
			<TopNav />
			<ContactForm />
			<Footer />
		</div>
	);
};

export default Contact;
