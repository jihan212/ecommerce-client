import React from 'react';
import BigColumn from './BigColumn';
import SmallColumn from './SmallColumn';

const Layouts = () => {
	return (
		<div className='row mb-5'>
			<BigColumn />
			<SmallColumn />
		</div>
	);
};

export default Layouts;
