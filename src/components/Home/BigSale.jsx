import React from 'react';
import blog1 from '../../images/blog1.jpg';

const BigSale = () => {
	return (
		<>
			<div class='site-section block-8'>
				<div class='container'>
					<div class='row justify-content-center mb-5'>
						<div class='col-md-7 site-section-heading text-center pt-4'>
							<h2>Big Sale!</h2>
						</div>
					</div>
					<div class='row align-items-center'>
						<div class='col-md-12 col-lg-7 mb-5'>
							<a href='/'>
								<img
									src={blog1}
									alt='placeholder'
									class='img-fluid rounded'
								/>
							</a>
						</div>
						<div class='col-md-12 col-lg-5 text-center pl-md-5'>
							<h2>50% less in all items</h2>

							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Quisquam iste dolor
								accusantium facere corporis ipsum animi deleniti
								fugiat. Ex, veniam?
							</p>
							<p>
								<a
									href='/'
									class='btn btn-primary btn-sm'
								>
									Shop Now
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BigSale;
