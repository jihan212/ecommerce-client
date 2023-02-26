import React from 'react';

const Header = () => {
	return (
		<header
			class='site-navbar'
			role='banner'
		>
			<nav
				class='site-navigation text-right text-md-center'
				role='navigation'
			>
				<div class='container'>
					<ul class='site-menu js-clone-nav d-none d-md-block'>
						<li class='active'>
							<a href='index.html'>Home</a>
						</li>
						<li>
							<a href='about.html'>About</a>
						</li>
						<li>
							<a href='shop.html'>Shop</a>
						</li>
						<li>
							<a href='contact.html'>Contact</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
