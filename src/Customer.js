import React from 'react';

const Customers = ({customers}) =>{
	const customerList = customers.map(customer => {
		return (
			<div className="customer" key={customer.id}>
				<li>{customer.name}</li>
			</div>
		)
	})
	return(
		<div className="customerList">
		{customerList}
		</div>
	);
}

export default Customers;