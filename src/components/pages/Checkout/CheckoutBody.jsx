import React from 'react';
import BillingDetails from './BillingDetails';
import OrderDetails from './OrderDetails';

const CheckoutBody = () => {
	return (
		<div className='site-section'>
			<div className='container'>
				<div className='row'>
					<BillingDetails />
					<OrderDetails />
				</div>
			</div>
		</div>
	);
};

export default CheckoutBody;
