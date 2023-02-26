import React from 'react';
import tanktop from '../../../../images/tanktop.jpg';
import corater from '../../../../images/corater.jpg';
import poloshirt from '../../../../images/poloshirt.jpg';
import tshirtmockup from '../../../../images/tshirtmockup.jpg';

const BigColumn = () => {
	return (
		<div class='col-md-9 order-2'>
			<div class='row'>
				<div class='col-md-12 mb-5'>
					<div class='float-md-left mb-4'>
						<h2 class='text-black h5'>Shop All</h2>
					</div>
					<div class='d-flex'>
						<div class='dropdown mr-1 ml-md-auto'>
							<button
								type='button'
								class='btn btn-secondary btn-sm dropdown-toggle'
								id='dropdownMenuOffset'
								data-toggle='dropdown'
								aria-haspopup='true'
								aria-expanded='false'
							>
								Latest
							</button>
							<div
								class='dropdown-menu'
								aria-labelledby='dropdownMenuOffset'
							>
								<a
									class='dropdown-item'
									href='/'
								>
									Men
								</a>
								<a
									class='dropdown-item'
									href='/'
								>
									Women
								</a>
								<a
									class='dropdown-item'
									href='/'
								>
									Children
								</a>
							</div>
						</div>
						<div class='btn-group'>
							<button
								type='button'
								class='btn btn-secondary btn-sm dropdown-toggle'
								id='dropdownMenuReference'
								data-toggle='dropdown'
							>
								Reference
							</button>
							<div
								class='dropdown-menu'
								aria-labelledby='dropdownMenuReference'
							>
								<a
									class='dropdown-item'
									href='/'
								>
									Relevance
								</a>
								<a
									class='dropdown-item'
									href='/'
								>
									Name, A to Z
								</a>
								<a
									class='dropdown-item'
									href='/'
								>
									Name, Z to A
								</a>
								<div class='dropdown-divider'></div>
								<a
									class='dropdown-item'
									href='/'
								>
									Price, low to high
								</a>
								<a
									class='dropdown-item'
									href='/'
								>
									Price, high to low
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class='row mb-5'>
				<div class='col-sm-6 col-lg-4 mb-4'>
					<div class='block-4 text-center border'>
						<figure class='block-4-image'>
							<a href='shop-single.html'>
								<img
									src={tanktop}
									alt='placeholder'
									class='img-fluid'
								/>
							</a>
						</figure>
						<div class='block-4-text p-4'>
							<h3>
								<a href='shop-single.html'>Tank Top</a>
							</h3>
							<p class='mb-0'>Finding perfect t-shirt</p>
							<p class='text-primary font-weight-bold'>$50</p>
						</div>
					</div>
				</div>
				<div class='col-sm-6 col-lg-4 mb-4'>
					<div class='block-4 text-center border'>
						<figure class='block-4-image'>
							<a href='shop-single.html'>
								<img
									src={corater}
									alt='placeholder'
									class='img-fluid'
								/>
							</a>
						</figure>
						<div class='block-4-text p-4'>
							<h3>
								<a href='shop-single.html'>Corater</a>
							</h3>
							<p class='mb-0'>Finding perfect products</p>
							<p class='text-primary font-weight-bold'>$50</p>
						</div>
					</div>
				</div>
				<div class='col-sm-6 col-lg-4 mb-4'>
					<div class='block-4 text-center border'>
						<figure class='block-4-image'>
							<a href='shop-single.html'>
								<img
									src={poloshirt}
									alt='placeholder'
									class='img-fluid'
								/>
							</a>
						</figure>
						<div class='block-4-text p-4'>
							<h3>
								<a href='shop-single.html'>Polo Shirt</a>
							</h3>
							<p class='mb-0'>Finding perfect products</p>
							<p class='text-primary font-weight-bold'>$50</p>
						</div>
					</div>
				</div>
				<div class='col-sm-6 col-lg-4 mb-4'>
					<div class='block-4 text-center border'>
						<figure class='block-4-image'>
							<a href='shop-single.html'>
								<img
									src={tshirtmockup}
									alt='placeholder'
									class='img-fluid'
								/>
							</a>
						</figure>
						<div class='block-4-text p-4'>
							<h3>
								<a href='shop-single.html'>T-Shirt Mockup</a>
							</h3>
							<p class='mb-0'>Finding perfect products</p>
							<p class='text-primary font-weight-bold'>$50</p>
						</div>
					</div>
				</div>
				<div class='col-sm-6 col-lg-4 mb-4'>
					<div class='block-4 text-center border'>
						<figure class='block-4-image'>
							<a href='shop-single.html'>
								<img
									src={corater}
									alt='placeholder'
									class='img-fluid'
								/>
							</a>
						</figure>
						<div class='block-4-text p-4'>
							<h3>
								<a href='shop-single.html'>Corater</a>
							</h3>
							<p class='mb-0'>Finding perfect products</p>
							<p class='text-primary font-weight-bold'>$50</p>
						</div>
					</div>
				</div>
				<div class='col-sm-6 col-lg-4 mb-4'>
					<div class='block-4 text-center border'>
						<figure class='block-4-image'>
							<a href='shop-single.html'>
								<img
									src={tanktop}
									alt='placeholder'
									class='img-fluid'
								/>
							</a>
						</figure>
						<div class='block-4-text p-4'>
							<h3>
								<a href='shop-single.html'>Tank Top</a>
							</h3>
							<p class='mb-0'>Finding perfect t-shirt</p>
							<p class='text-primary font-weight-bold'>$50</p>
						</div>
					</div>
				</div>
				<div class='col-sm-6 col-lg-4 mb-4'>
					<div class='block-4 text-center border'>
						<figure class='block-4-image'>
							<a href='shop-single.html'>
								<img
									src={corater}
									alt='placeholder'
									class='img-fluid'
								/>
							</a>
						</figure>
						<div class='block-4-text p-4'>
							<h3>
								<a href='shop-single.html'>Corater</a>
							</h3>
							<p class='mb-0'>Finding perfect products</p>
							<p class='text-primary font-weight-bold'>$50</p>
						</div>
					</div>
				</div>
				<div class='col-sm-6 col-lg-4 mb-4'>
					<div class='block-4 text-center border'>
						<figure class='block-4-image'>
							<a href='shop-single.html'>
								<img
									src={poloshirt}
									alt='placeholder'
									class='img-fluid'
								/>
							</a>
						</figure>
						<div class='block-4-text p-4'>
							<h3>
								<a href='shop-single.html'>Polo Shirt</a>
							</h3>
							<p class='mb-0'>Finding perfect products</p>
							<p class='text-primary font-weight-bold'>$50</p>
						</div>
					</div>
				</div>
				<div class='col-sm-6 col-lg-4 mb-4'>
					<div class='block-4 text-center border'>
						<figure class='block-4-image'>
							<a href='shop-single.html'>
								<img
									src={tshirtmockup}
									alt='placeholder'
									class='img-fluid'
								/>
							</a>
						</figure>
						<div class='block-4-text p-4'>
							<h3>
								<a href='shop-single.html'>T-Shirt Mockup</a>
							</h3>
							<p class='mb-0'>Finding perfect products</p>
							<p class='text-primary font-weight-bold'>$50</p>
						</div>
					</div>
				</div>
				<div class='col-sm-6 col-lg-4 mb-4'>
					<div class='block-4 text-center border'>
						<figure class='block-4-image'>
							<a href='shop-single.html'>
								<img
									src={corater}
									alt='placeholder'
									class='img-fluid'
								/>
							</a>
						</figure>
						<div class='block-4-text p-4'>
							<h3>
								<a href='shop-single.html'>Corater</a>
							</h3>
							<p class='mb-0'>Finding perfect products</p>
							<p class='text-primary font-weight-bold'>$50</p>
						</div>
					</div>
				</div>
				<div class='col-sm-6 col-lg-4 mb-4'>
					<div class='block-4 text-center border'>
						<figure class='block-4-image'>
							<a href='shop-single.html'>
								<img
									src={tanktop}
									alt='placeholder'
									class='img-fluid'
								/>
							</a>
						</figure>
						<div class='block-4-text p-4'>
							<h3>
								<a href='shop-single.html'>Tank Top</a>
							</h3>
							<p class='mb-0'>Finding perfect t-shirt</p>
							<p class='text-primary font-weight-bold'>$50</p>
						</div>
					</div>
				</div>
				<div class='col-sm-6 col-lg-4 mb-4'>
					<div class='block-4 text-center border'>
						<figure class='block-4-image'>
							<a href='shop-single.html'>
								<img
									src={poloshirt}
									alt='placeholder'
									class='img-fluid'
								/>
							</a>
						</figure>
						<div class='block-4-text p-4'>
							<h3>
								<a href='shop-single.html'>Polo Shirt</a>
							</h3>
							<p class='mb-0'>Finding perfect products</p>
							<p class='text-primary font-weight-bold'>$50</p>
						</div>
					</div>
				</div>
			</div>
			<div class='row'>
				<div class='col-md-12 text-center'>
					<div class='site-block-27'>
						<ul>
							<li>
								<a href='/'>&lt;</a>
							</li>
							<li class='active'>
								<span>1</span>
							</li>
							<li>
								<a href='/'>2</a>
							</li>
							<li>
								<a href='/'>3</a>
							</li>
							<li>
								<a href='/'>4</a>
							</li>
							<li>
								<a href='/'>5</a>
							</li>
							<li>
								<a href='/'>&gt;</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BigColumn;
