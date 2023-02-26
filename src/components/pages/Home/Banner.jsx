import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
	return (
		<>
			<div
				className='site-blocks-cover'
				style={{
					backgroundImage: `url(${
						process.env.PUBLIC_URL + '/assets/images/banner.jpg'
					})`,
				}}
			>
				<div className='container'>
					<div className='row align-items-start align-items-md-center justify-content-end'>
						<div className='col-md-5 text-center text-md-left pt-5 pt-md-0'>
							<h1 className='mb-2'>Finding Your Perfect Shoes</h1>
							<div className='intro-text text-center text-md-left'>
								<p className='mb-4'>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Phasellus at iaculis quam.
									Integer accumsan tincidunt fringilla.
								</p>
								<p>
									<Link
										to='/shop'
										className='btn btn-sm btn-primary'
									>
										Shop Now
									</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Banner;
