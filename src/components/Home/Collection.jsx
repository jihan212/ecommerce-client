import React from 'react';
import women from '../../images/women.jpg';
import children from '../../images/children.jpg';
import men from '../../images/men.jpg';

const Collection = () => {
	return (
		<>
			<div class='site-section site-section-sm site-blocks-1'>
				<div class='container'>
					<div class='row'>
						<div
							class='col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4'
							data-aos-delay=''
						>
							<div class='icon mr-4 align-self-start'>
								<span class='icon-truck'></span>
							</div>
							<div class='text'>
								<h2 class='text-uppercase'>Free Shipping</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Phasellus at iaculis quam.
									Integer accumsan tincidunt fringilla.
								</p>
							</div>
						</div>
						<div
							class='col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4'
							data-aos-delay='100'
						>
							<div class='icon mr-4 align-self-start'>
								<span class='icon-refresh2'></span>
							</div>
							<div class='text'>
								<h2 class='text-uppercase'>Free Returns</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Phasellus at iaculis quam.
									Integer accumsan tincidunt fringilla.
								</p>
							</div>
						</div>
						<div
							class='col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4'
							data-aos-delay='200'
						>
							<div class='icon mr-4 align-self-start'>
								<span class='icon-help'></span>
							</div>
							<div class='text'>
								<h2 class='text-uppercase'>Customer Support</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Phasellus at iaculis quam.
									Integer accumsan tincidunt fringilla.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class='container'>
				<div class='row'>
					<div
						class='col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0'
						data-aos-delay=''
					>
						<a
							class='block-2-item'
							href='/women'
						>
							<figure class='image'>
								<img
									src={women}
									alt=''
									class='img-fluid'
								/>
							</figure>
							<div class='text'>
								<span class='text-uppercase'>Collections</span>
								<h3>Women</h3>
							</div>
						</a>
					</div>
					<div
						class='col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0'
						data-aos-delay='100'
					>
						<a
							class='block-2-item'
							href='/children'
						>
							<figure class='image'>
								<img
									src={children}
									alt=''
									class='img-fluid'
								/>
							</figure>
							<div class='text'>
								<span class='text-uppercase'>Collections</span>
								<h3>Children</h3>
							</div>
						</a>
					</div>
					<div
						class='col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0'
						data-aos-delay='200'
					>
						<a
							class='block-2-item'
							href='/men'
						>
							<figure class='image'>
								<img
									src={men}
									alt=''
									class='img-fluid'
								/>
							</figure>
							<div class='text'>
								<span class='text-uppercase'>Collections</span>
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
