import React from 'react';
import tanktop from '../../../images/tanktop.jpg';
import poloshirt from '../../../images/poloshirt.jpg';
import tshirtmockup from '../../../images/tshirtmockup.jpg';

const FeaturedProduct = () => {
	return (
		<div className='site-section block-3 site-blocks-2 bg-light'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-md-7 site-section-heading text-center pt-4'>
						<h2>Featured Products</h2>
					</div>
				</div>

				<div className='row'>
					<div className='col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4 item'>
						<div className='block-4 text-center'>
							<figure className='block-4-image'>
								<img
									src={tanktop}
									alt='placeholder'
									className='img-fluid'
								/>
							</figure>
							<div className='block-4-text p-4'>
								<h3>
									<a href='/tankop'>Tank Top</a>
								</h3>
								<p className='mb-0'>Finding perfect t-shirt</p>
								<p className='text-primary font-weight-bold'>
									$50
								</p>
							</div>
						</div>
					</div>

					<div className='col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4 item'>
						<div className='block-4 text-center'>
							<figure className='block-4-image'>
								<img
									src={poloshirt}
									alt='placeholder'
									className='img-fluid'
								/>
							</figure>
							<div className='block-4-text p-4'>
								<h3>
									<a href='/poloshirt'>Polo Shirt</a>
								</h3>
								<p className='mb-0'>Finding perfect products</p>
								<p className='text-primary font-weight-bold'>
									$50
								</p>
							</div>
						</div>
					</div>
					<div className='col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4 item'>
						<div className='block-4 text-center'>
							<figure className='block-4-image'>
								<img
									src={tshirtmockup}
									alt='placeholder'
									className='img-fluid'
								/>
							</figure>
							<div className='block-4-text p-4'>
								<h3>
									<a href='/tshirtmockup'>T-Shirt Mockup</a>
								</h3>
								<p className='mb-0'>Finding perfect products</p>
								<p className='text-primary font-weight-bold'>
									$50
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedProduct;
