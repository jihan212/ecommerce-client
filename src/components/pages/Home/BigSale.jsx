import React from 'react';
import { Link } from 'react-router-dom';
import blog1 from '../../../images/blog1.jpg';

const BigSale = () => {
	return (
		<>
			<div className='site-section block-8'>
				<div className='container'>
					<div className='row justify-content-center mb-5'>
						<div className='col-md-7 site-section-heading text-center pt-4'>
							<h2>Big Sale!</h2>
						</div>
					</div>
					<div className='row align-items-center'>
						<div className='col-md-12 col-lg-7 mb-5'>
							<a href='/'>
								<img
									src={blog1}
									alt='placeholder'
									className='img-fluid rounded'
								/>
							</a>
						</div>
						<div className='col-md-12 col-lg-5 text-center pl-md-5'>
							<h2>50% less in all items</h2>

							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Quisquam iste dolor
								accusantium facere corporis ipsum animi deleniti
								fugiat. Ex, veniam?
							</p>
							<p>
								<Link
									to='/shop'
									className='btn btn-primary btn-sm'
								>
									Shop Now
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BigSale;
