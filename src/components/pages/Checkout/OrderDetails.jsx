import React from 'react';
import { Link } from 'react-router-dom';

const OrderDetails = () => {
	return (
		<div className='col-md-6'>
			<div className='row mb-5'>
				<div className='col-md-12'>
					<h2 className='h3 mb-3 text-black'>Coupon Code</h2>
					<div className='p-3 p-lg-5 border'>
						<label
							for='c_code'
							className='text-black mb-3'
						>
							Enter your coupon code if you have one
						</label>
						<div className='input-group w-75'>
							<input
								type='text'
								className='form-control'
								id='c_code'
								placeholder='Coupon Code'
								aria-label='Coupon Code'
								aria-describedby='button-addon2'
							/>
							<div className='input-group-append'>
								<button
									className='btn btn-primary btn-sm'
									type='button'
									id='button-addon2'
								>
									Apply
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='row mb-5'>
				<div className='col-md-12'>
					<h2 className='h3 mb-3 text-black'>Your Order</h2>
					<div className='p-3 p-lg-5 border'>
						<table className='table site-block-order-table mb-5'>
							<thead>
								<th>Product</th>
								<th>Total</th>
							</thead>
							<tbody>
								<tr>
									<td>
										Top Up T-Shirt
										<strong className='mx-2'>x</strong>1
									</td>
									<td>$250.00</td>
								</tr>
								<tr>
									<td>
										Polo Shirt
										<strong className='mx-2'>x</strong>1
									</td>
									<td>$100.00</td>
								</tr>
								<tr>
									<td className='text-black font-weight-bold'>
										<strong>Cart Subtotal</strong>
									</td>
									<td className='text-black'>$350.00</td>
								</tr>
								<tr>
									<td className='text-black font-weight-bold'>
										<strong>Order Total</strong>
									</td>
									<td className='text-black font-weight-bold'>
										<strong>$350.00</strong>
									</td>
								</tr>
							</tbody>
						</table>
						<div className='border p-3 mb-3'>
							<h3 className='h6 mb-0'>
								<a
									className='d-block'
									data-toggle='collapse'
									href='/'
									role='button'
									aria-expanded='false'
									aria-controls='collapsebank'
								>
									Direct Bank Transfer
								</a>
							</h3>
							<div
								className='collapse'
								id='collapsebank'
							>
								<div className='py-2'>
									<p className='mb-0'>
										Make your payment directly into our bank
										account. Please use your Order ID as the
										payment reference. Your order won’t be
										shipped until the funds have cleared in
										our account.
									</p>
								</div>
							</div>
						</div>
						<div className='border p-3 mb-3'>
							<h3 className='h6 mb-0'>
								<a
									className='d-block'
									data-toggle='collapse'
									href='/'
									role='button'
									aria-expanded='false'
									aria-controls='collapsecheque'
								>
									Cheque Payment
								</a>
							</h3>
							<div
								className='collapse'
								id='collapsecheque'
							>
								<div className='py-2'>
									<p className='mb-0'>
										Make your payment directly into our bank
										account. Please use your Order ID as the
										payment reference. Your order won’t be
										shipped until the funds have cleared in
										our account.
									</p>
								</div>
							</div>
						</div>
						<div className='border p-3 mb-5'>
							<h3 className='h6 mb-0'>
								<a
									className='d-block'
									data-toggle='collapse'
									href='#collapsepaypal'
									role='button'
									aria-expanded='false'
									aria-controls='collapsepaypal'
								>
									Paypal
								</a>
							</h3>
							<div
								className='collapse'
								id='collapsepaypal'
							>
								<div className='py-2'>
									<p className='mb-0'>
										Make your payment directly into our bank
										account. Please use your Order ID as the
										payment reference. Your order won’t be
										shipped until the funds have cleared in
										our account.
									</p>
								</div>
							</div>
						</div>
						<div className='form-group'>
							<Link to='/thankyou'>
								<button
									className='btn btn-primary btn-lg py-3 btn-block'
									onclick="window.location='thankyou.html'"
								>
									Place Order
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrderDetails;
