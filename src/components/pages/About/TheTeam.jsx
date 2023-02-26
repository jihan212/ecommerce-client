import React from 'react';
import person1 from '../../../images/person1.jpg';
import person2 from '../../../images/person2.jpg';
import person3 from '../../../images/person3.jpg';
import person4 from '../../../images/person4.jpg';

const TheTeam = () => {
	return (
		<div class='site-section border-bottom'>
			<div class='container'>
				<div class='row justify-content-center mb-5'>
					<div class='col-md-7 site-section-heading text-center pt-4'>
						<h2>The Team</h2>
					</div>
				</div>
				<div class='row'>
					<div class='col-md-6 col-lg-3'>
						<div class='block-38 text-center'>
							<div class='block-38-img'>
								<div class='block-38-header'>
									<img
										src={person1}
										alt='placeholder'
										class='mb-4'
									/>
									<h3 class='block-38-heading h4'>
										Elizabeth Graham
									</h3>
									<p class='block-38-subheading'>
										CEO/Co-Founder
									</p>
								</div>
								<div class='block-38-body'>
									<p>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Vitae aut minima nihil
										sit distinctio recusandae doloribus ut
										fugit officia voluptate soluta.{' '}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class='col-md-6 col-lg-3'>
						<div class='block-38 text-center'>
							<div class='block-38-img'>
								<div class='block-38-header'>
									<img
										src={person2}
										alt='placeholder'
										class='mb-4'
									/>
									<h3 class='block-38-heading h4'>
										Jennifer Greive
									</h3>
									<p class='block-38-subheading'>
										Co-Founder
									</p>
								</div>
								<div class='block-38-body'>
									<p>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Vitae aut minima nihil
										sit distinctio recusandae doloribus ut
										fugit officia voluptate soluta.{' '}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class='col-md-6 col-lg-3'>
						<div class='block-38 text-center'>
							<div class='block-38-img'>
								<div class='block-38-header'>
									<img
										src={person3}
										alt='placeholder'
										class='mb-4'
									/>
									<h3 class='block-38-heading h4'>
										Patrick Marx
									</h3>
									<p class='block-38-subheading'>Marketing</p>
								</div>
								<div class='block-38-body'>
									<p>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Vitae aut minima nihil
										sit distinctio recusandae doloribus ut
										fugit officia voluptate soluta.{' '}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class='col-md-6 col-lg-3'>
						<div class='block-38 text-center'>
							<div class='block-38-img'>
								<div class='block-38-header'>
									<img
										src={person4}
										alt='placeholder'
										class='mb-4'
									/>
									<h3 class='block-38-heading h4'>
										Mike Coolbert
									</h3>
									<p class='block-38-subheading'>
										Sales Manager
									</p>
								</div>
								<div class='block-38-body'>
									<p>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Vitae aut minima nihil
										sit distinctio recusandae doloribus ut
										fugit officia voluptate soluta.{' '}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TheTeam;
