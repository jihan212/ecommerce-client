import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header
			className='site-navbar'
			role='banner'
		>
			<nav
				className='site-navigation text-right text-md-center'
				role='navigation'
			>
				<div className='container'>
					<ul className='site-menu js-clone-nav d-none d-md-block'>
						<li className='active'>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/about'>About</Link>
						</li>
						<li>
							<Link to='/shop'>Shop</Link>
						</li>
						<li>
							<Link to='/contact'>Contact</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
