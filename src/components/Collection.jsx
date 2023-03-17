import React from 'react';
import women from '../images/women.jpg';
import children from '../images/children.jpg';
import men from '../images/men.jpg';

const Collection = () => {
	return (
		<>
			<div className='container '>
				<div className='row justify-content-center'>
					<div className='col-md-7 site-section-heading text-center pt-4'>
						<h2>Collection</h2>
					</div>
				</div>
				<div className='row'>
					<div
						className='col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0'
						data-aos-delay=''
					>
						<a
							className='block-2-item text-decoration-none text-black'
							href='/women'
						>
							<figure className='image'>
								<img
									src={women}
									alt=''
									className='img-fluid'
								/>
							</figure>
							<div className='text'>
								<span className='text-uppercase'>
									Collections
								</span>
								<h3>Women</h3>
							</div>
						</a>
					</div>
					<div
						className='col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0'
						data-aos-delay='100'
					>
						<a
							className='block-2-item text-decoration-none text-black'
							href='/children'
						>
							<figure className='image'>
								<img
									src={children}
									alt=''
									className='img-fluid'
								/>
							</figure>
							<div className='text'>
								<span className='text-uppercase'>
									Collections
								</span>
								<h3>Children</h3>
							</div>
						</a>
					</div>
					<div
						className='col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0'
						data-aos-delay='200'
					>
						<a
							className='block-2-item text-decoration-none text-black'
							href='/men'
						>
							<figure className='image'>
								<img
									src={men}
									alt=''
									className='img-fluid'
								/>
							</figure>
							<div className='text'>
								<span className='text-uppercase'>
									Collections
								</span>
								<h3>Men</h3>
							</div>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Collection;
