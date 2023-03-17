import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import tanktop from '../../../images/tanktop.jpg';

const SingleProductBody = () => {
	const [counter, setCounter] = useState(0);

	const increase = () => {
		setCounter((count) => count + 1);
	};

	//decrease counter
	const decrease = () => {
		if (counter > 0) {
			setCounter((count) => count - 1);
		} 
	};
	return (
		<div className='site-section'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-6'>
						<img
							src={tanktop}
							alt='placeholder'
							className='img-fluid'
						/>
					</div>
					<div className='col-md-6'>
						<h2 className='text-black'>Tank Top T-Shirt</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Pariatur, vitae, explicabo? Incidunt facere,
							natus soluta dolores iusto! Molestiae expedita
							veritatis nesciunt doloremque sint asperiores fuga
							voluptas, distinctio, aperiam, ratione dolore.
						</p>
						<p>
							<strong className='text-primary h4 mt-1'>
								$50.00
							</strong>
						</p>

						<div className='mb-5'>
							<div
								className='input-group mb-3'
								style={{ maxWidth: '120px' }}
							>
								<div className='input-group-prepend'>
									<button
										className='btn btn-outline-primary js-btn-minus'
										type='button'
										onClick={decrease}
									>
										&#45;
									</button>
								</div>
								<input
									type='text'
									className='form-control text-center'
									value={counter}
									placeholder=''
									aria-label='Example text with button addon'
									aria-describedby='button-addon1'
								/>
								<div className='input-group-append'>
									<button
										className='btn btn-outline-primary js-btn-plus'
										type='button'
										onClick={increase}
									>
										&#43;
									</button>
								</div>
							</div>
						</div>
						<p>
							<Link
								to='/cart'
								className='buy-now btn btn-sm btn-primary'
							>
								Add To Cart
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleProductBody;
