import React from 'react';

const SmallColumn = () => {
	return (
		<div className='col-md-3 order-1 mb-5 mb-md-0 '>
			<div className='border p-4 rounded mb-4'>
				<h3 className='mb-3 h6 text-uppercase text-black d-block'>
					Categories
				</h3>
				<ul className='list-unstyled mb-0'>
					<li className='mb-1'>
						<a
							href='/'
							className='d-flex text-decoration-none text-black'
						>
							<span>Men</span>
						</a>
					</li>
					<li className='mb-1'>
						<a
							href='/'
							className='d-flex text-decoration-none text-black'
						>
							<span>Women</span>
						</a>
					</li>
					<li className='mb-1'>
						<a
							href='/'
							className='d-flex text-decoration-none text-black'
						>
							<span>Children</span>
						</a>
					</li>
				</ul>
			</div>
			<div className='border p-4 rounded mb-4'>
				<div className='mb-4'>
					<h3 className='mb-3 h6 text-uppercase text-black d-block'>
						Filter by Price
					</h3>
					<input
						type='range'
						name='text'
						className='form-range border-0 pl-0 bg-white'
						min='100'
						max='5000'
					/>
				</div>
				<div className='mb-4'>
					<h3 className='mb-3 h6 text-uppercase text-black d-block'>
						Size
					</h3>
					<label
						for='s_sm'
						className='d-flex'
					>
						<input
							type='checkbox'
							id='s_sm'
							className='mr-2 mt-1'
						/>
						<span className='text-black'>Small </span>
					</label>
					<label
						for='s_md'
						className='d-flex'
					>
						<input
							type='checkbox'
							id='s_md'
							className='mr-2 mt-1'
						/>
						<span className='text-black'>Medium </span>
					</label>
					<label
						for='s_lg'
						className='d-flex'
					>
						<input
							type='checkbox'
							id='s_lg'
							className='mr-2 mt-1'
						/>
						<span className='text-black'>Large</span>
					</label>
				</div>
				<div className='mb-4'>
					<h3 className='mb-3 h6 text-uppercase text-black d-block'>
						Color
					</h3>
					<a
						href='/'
						className='d-flex color-item align-items-center text-decoration-none'
					>
						<span className='bg-danger color d-inline-block rounded-circle mr-2'></span>
						<span className='text-black'>Red </span>
					</a>
					<a
						href='/'
						className='d-flex color-item align-items-center text-decoration-none'
					>
						<span className='bg-success color d-inline-block rounded-circle mr-2'></span>
						<span className='text-black'>Green </span>
					</a>
					<a
						href='/'
						className='d-flex color-item align-items-center text-decoration-none'
					>
						<span className='bg-primary color d-inline-block rounded-circle mr-2'></span>
						<span className='text-black'>Blue </span>
					</a>
					<a
						href='/'
						className='d-flex color-item align-items-center text-decoration-none'
					>
						<span className='bg-warning color d-inline-block rounded-circle mr-2'></span>
						<span className='text-black'>Yellow </span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default SmallColumn;
