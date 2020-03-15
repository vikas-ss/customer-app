import React from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

class UserDetail extends React.Component{
	handleClick = () => {
		this.props.deletePost(this.props.user.id);
		this.props.history.push('/store');
	}
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
				<div className="center">
					<Button className="btn btn-info" onClick={this.handleClick}>Delete</Button>
				</div>
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

const mapDispatchToProps = (dispatch) => {
	return {
		deletePost: (id) => { 
			dispatch({type: 'DELETE_USER', id: id}) 
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);