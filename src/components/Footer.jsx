import React from 'react';

const Footer = () => {
	return (
		<footer className='site-footer border-top'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-6 mb-5 mb-lg-0'>
						<div className='row'>
							<div className='col-md-12'>
								<h3 className='footer-heading mb-4'>
									Navigations
								</h3>
							</div>
							<div className='col-md-6 col-lg-4'>
								<ul className='list-unstyled'>
									<li>
										<a href='/'>Sell online</a>
									</li>
									<li>
										<a href='/'>Features</a>
									</li>
									<li>
										<a href='/'>Shopping cart</a>
									</li>
									<li>
										<a href='/'>Store builder</a>
									</li>
								</ul>
							</div>
							<div className='col-md-6 col-lg-4'>
								<ul className='list-unstyled'>
									<li>
										<a href='/'>Mobile commerce</a>
									</li>
									<li>
										<a href='/'>Dropshipping</a>
									</li>
									<li>
										<a href='/'>Website development</a>
									</li>
								</ul>
							</div>
							<div className='col-md-6 col-lg-4'>
								<ul className='list-unstyled'>
									<li>
										<a href='/'>Point of sale</a>
									</li>
									<li>
										<a href='/'>Hardware</a>
									</li>
									<li>
										<a href='/'>Software</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='col-md-6 col-lg-3 mb-4 mb-lg-0'></div>
					<div className='col-md-6 col-lg-3'>
						<div className='block-5 mb-5'>
							<h3 className='footer-heading mb-4'>
								Contact Info
							</h3>
							<ul className='list-unstyled'>
								<li className='address'>
									203 Fake St. Mountain View, San Francisco,
									California, USA
								</li>
								<li className='phone'>
									<a href='tel://23923929210'>
										+2 392 3929 210
									</a>
								</li>
								<li className='email'>
									<a
										href='admin@email.com'
										className='__cf_email__'
									>
										admin@email.com
									</a>
								</li>
							</ul>
						</div>
						<div className='block-7'>
							<form
								action='#'
								method='post'
							>
								<label
									htmlFor='email_subscribe'
									className='footer-heading'
								>
									Subscribe
								</label>
								<div className='form-group'>
									<input
										type='text'
										className='form-control py-4'
										id='email_subscribe'
										placeholder='Email'
									/>
									<input
										type='submit'
										className='btn btn-sm btn-primary'
										value='Send'
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
