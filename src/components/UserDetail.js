import React from 'react';
import { connect } from 'react-redux';

class UserDetail extends React.Component{
	render(){
		const user = this.props.user ? (
			<div className="user">
				<h4>Name: {this.props.user.name}</h4>
				<h4>Email: {this.props.user.email}</h4>
			</div>
		) : (
			<div className="user">No user found</div>
		);
		return(
			<div className="container">
				<br/>
				<h4>User Details:</h4>
				<br/>
				<h4>{user}</h4>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	let id = ownProps.match.params.user_id;
	return {
		user: state.users.find(user => user.id === id)
	}
}

export default connect(mapStateToProps)(UserDetail);