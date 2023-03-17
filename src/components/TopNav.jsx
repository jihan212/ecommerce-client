import React from 'react';
import { Link } from 'react-router-dom';

const TopNav = () => {
	return (
		<div className='bg-light py-3'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12 mb-0 '>
						<Link
							to='/'
							className='text-decoration-none text-black'
						>
							Home
						</Link>{' '}
						<span className='mx-2 mb-0'>/</span>{' '}
						<strong className='text-black'>About</strong>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopNav;
