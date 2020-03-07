import React from 'react';

class Customer extends React.Component{
	render(){
		const {name} = this.props;
		return(
			<div className="customer">
			<li>{name}</li>
			</div>
		);
	}
}

export default Customer;