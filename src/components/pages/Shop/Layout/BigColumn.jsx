import React from 'react';
import tanktop from '../../../../images/tanktop.jpg';
import corater from '../../../../images/corater.jpg';
import poloshirt from '../../../../images/poloshirt.jpg';
import tshirtmockup from '../../../../images/tshirtmockup.jpg';
import { Link } from 'react-router-dom';

const BigColumn = () => {
	return (
		<div className='col-md-9 order-2'>
			<div className='row'>
				<div className='col-md-12 mb-5'>
					<div className='float-md-left mb-4'>
						<h2 className='text-black h5'>Shop All</h2>
					</div>
					<div className='d-flex'>
						<div className='dropdown mr-1 ml-md-auto'>
							<button
								type='button'
								className='btn btn-secondary btn-sm dropdown-toggle'
								id='dropdownMenuOffset'
								data-bs-toggle='dropdown'
								aria-haspopup='true'
								aria-expanded='false'
							>
								Category
							</button>
							<div
								className='dropdown-menu'
								aria-labelledby='dropdownMenuOffset'
							>
								<Link
									className='dropdown-item'
									to='/men'
								>
									Men
								</Link>
								<Link
									className='dropdown-item'
									to='/'
								>
									Women
								</Link>
								<Link
									className='dropdown-item'
									to='/'
								>
									Children
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='row mb-5'>
				<div className='col-sm-6 col-lg-4 mb-4'>
					<div className='block-4 text-center border'>
						<figure className='block-4-image'>
							<Link to='/singleproduct'>
								<img
									src={tanktop}
									alt='placeholder'
									className='img-fluid'
								/>
							</Link>
						</figure>
						<div className='block-4-text p-4'>
							<h3>
								<Link to='/singleproduct'>Tank Top</Link>
							</h3>
							<p className='mb-0'>Finding perfect t-shirt</p>
							<p className='text-primary font-weight-bold'>$50</p>
						</div>
					</div>
				</div>
				<div className='col-sm-6 col-lg-4 mb-4'>
					<div className='block-4 text-center border'>
						<figure className='block-4-image'>
							<Link to='/singleproduct'>
								<img
									src={corater}
									alt='placeholder'
									className='img-fluid'
								/>
							</Link>
						</figure>
						<div className='block-4-text p-4'>
							<h3>
								<Link to='/singleproduct'>Corater</Link>
							</h3>
							<p className='mb-0'>Finding perfect products</p>
							<p className='text-primary font-weight-bold'>$50</p>
						</div>
					</div>
				</div>
				<div className='col-sm-6 col-lg-4 mb-4'>
					<div className='block-4 text-center border'>
						<figure className='block-4-image'>
							<Link to='/singleproduct'>
								<img
									src={poloshirt}
									alt='placeholder'
									className='img-fluid'
								/>
							</Link>
						</figure>
						<div className='block-4-text p-4'>
							<h3>
								<Link to='/singleproduct'>Polo Shirt</Link>
							</h3>
							<p className='mb-0'>Finding perfect products</p>
							<p className='text-primary font-weight-bold'>$50</p>
						</div>
					</div>
				</div>
				<div className='col-sm-6 col-lg-4 mb-4'>
					<div className='block-4 text-center border'>
						<figure className='block-4-image'>
							<Link to='/singleproduct'>
								<img
									src={tshirtmockup}
									alt='placeholder'
									className='img-fluid'
								/>
							</Link>
						</figure>
						<div className='block-4-text p-4'>
							<h3>
								<Link to='/singleproduct'>T-Shirt Mockup</Link>
							</h3>
							<p className='mb-0'>Finding perfect products</p>
							<p className='text-primary font-weight-bold'>$50</p>
						</div>
					</div>
				</div>
				<div className='col-sm-6 col-lg-4 mb-4'>
					<div className='block-4 text-center border'>
						<figure className='block-4-image'>
							<Link to='/singleproduct'>
								<img
									src={corater}
									alt='placeholder'
									className='img-fluid'
								/>
							</Link>
						</figure>
						<div className='block-4-text p-4'>
							<h3>
								<Link to='/singleproduct'>Corater</Link>
							</h3>
							<p className='mb-0'>Finding perfect products</p>
							<p className='text-primary font-weight-bold'>$50</p>
						</div>
					</div>
				</div>
				<div className='col-sm-6 col-lg-4 mb-4'>
					<div className='block-4 text-center border'>
						<figure className='block-4-image'>
							<Link to='/singleproduct'>
								<img
									src={tanktop}
									alt='placeholder'
									className='img-fluid'
								/>
							</Link>
						</figure>
						<div className='block-4-text p-4'>
							<h3>
								<Link to='/singleproduct'>Tank Top</Link>
							</h3>
							<p className='mb-0'>Finding perfect t-shirt</p>
							<p className='text-primary font-weight-bold'>$50</p>
						</div>
					</div>
				</div>
				<div className='col-sm-6 col-lg-4 mb-4'>
					<div className='block-4 text-center border'>
						<figure className='block-4-image'>
							<Link to='/singleproduct'>
								<img
									src={corater}
									alt='placeholder'
									className='img-fluid'
								/>
							</Link>
						</figure>
						<div className='block-4-text p-4'>
							<h3>
								<Link to='/singleproduct'>Corater</Link>
							</h3>
							<p className='mb-0'>Finding perfect products</p>
							<p className='text-primary font-weight-bold'>$50</p>
						</div>
					</div>
				</div>
				<div className='col-sm-6 col-lg-4 mb-4'>
					<div className='block-4 text-center border'>
						<figure className='block-4-image'>
							<Link to='/singleproduct'>
								<img
									src={poloshirt}
									alt='placeholder'
									className='img-fluid'
								/>
							</Link>
						</figure>
						<div className='block-4-text p-4'>
							<h3>
								<Link to='/singleproduct'>Polo Shirt</Link>
							</h3>
							<p className='mb-0'>Finding perfect products</p>
							<p className='text-primary font-weight-bold'>$50</p>
						</div>
					</div>
				</div>
				<div className='col-sm-6 col-lg-4 mb-4'>
					<div className='block-4 text-center border'>
						<figure className='block-4-image'>
							<Link to='/singleproduct'>
								<img
									src={tshirtmockup}
									alt='placeholder'
									className='img-fluid'
								/>
							</Link>
						</figure>
						<div className='block-4-text p-4'>
							<h3>
								<Link to='/singleproduct'>T-Shirt Mockup</Link>
							</h3>
							<p className='mb-0'>Finding perfect products</p>
							<p className='text-primary font-weight-bold'>$50</p>
						</div>
					</div>
				</div>
				<div className='col-sm-6 col-lg-4 mb-4'>
					<div className='block-4 text-center border'>
						<figure className='block-4-image'>
							<Link to='/singleproduct'>
								<img
									src={corater}
									alt='placeholder'
									className='img-fluid'
								/>
							</Link>
						</figure>
						<div className='block-4-text p-4'>
							<h3>
								<Link to='/singleproduct'>Corater</Link>
							</h3>
							<p className='mb-0'>Finding perfect products</p>
							<p className='text-primary font-weight-bold'>$50</p>
						</div>
					</div>
				</div>
				<div className='col-sm-6 col-lg-4 mb-4'>
					<div className='block-4 text-center border'>
						<figure className='block-4-image'>
							<Link to='/singleproduct'>
								<img
									src={tanktop}
									alt='placeholder'
									className='img-fluid'
								/>
							</Link>
						</figure>
						<div className='block-4-text p-4'>
							<h3>
								<Link to='/singleproduct'>Tank Top</Link>
							</h3>
							<p className='mb-0'>Finding perfect t-shirt</p>
							<p className='text-primary font-weight-bold'>$50</p>
						</div>
					</div>
				</div>
				<div className='col-sm-6 col-lg-4 mb-4'>
					<div className='block-4 text-center border'>
						<figure className='block-4-image'>
							<Link to='/singleproduct'>
								<img
									src={poloshirt}
									alt='placeholder'
									className='img-fluid'
								/>
							</Link>
						</figure>
						<div className='block-4-text p-4'>
							<h3>
								<Link to='/singleproduct'>Polo Shirt</Link>
							</h3>
							<p className='mb-0'>Finding perfect products</p>
							<p className='text-primary font-weight-bold'>$50</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BigColumn;
