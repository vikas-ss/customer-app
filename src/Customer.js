import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';

const Customers = ({customers}) =>{
	const customerList = customers.map(customer => {
		return (
			<Col sm="12" key={customer.id}>
	        	<Card body>
		          	<CardTitle>{customer.name}</CardTitle>
		          	<CardText>{customer.desc}</CardText>
		        </Card>
		    </Col>
		)
	})
	return(
		<div className="customerList">
		<Row>
			{customerList}
		</Row>
		</div>
	);
}

export default Customers;