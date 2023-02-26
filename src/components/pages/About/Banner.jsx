import React from 'react';
import blog1 from '../../../images/blog1.jpg';

const Banner = () => {
	return (
		<div className='site-section border-bottom'>
			<div className='container'>
				<div className='row mb-5'>
					<div className='col-md-6'>
						<div className='block-16'>
							<figure>
								<img
									src={blog1}
									alt=' placeholder'
									className='img-fluid rounded'
								/>
							</figure>
						</div>
					</div>
					<div className='col-md-1'></div>
					<div className='col-md-5'>
						<div className='site-section-heading pt-3 mb-4'>
							<h2 className='text-black'>How We Started</h2>
						</div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Eius repellat, dicta at laboriosam, nemo
							exercitationem itaque eveniet architecto cumque,
							deleniti commodi molestias repellendus quos sequi
							hic fugiat asperiores illum. Atque, in, fuga
							excepturi corrupti error corporis aliquam unde
							nostrum quas.
						</p>
						<p>
							Accusantium dolor ratione maiores est deleniti
							nihil? Dignissimos est, sunt nulla illum autem in,
							quibusdam cumque recusandae, laudantium minima
							repellendus.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
