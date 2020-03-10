import React from 'react';
import axios from 'axios';

class User extends React.Component{
	state = {
		user: null
	};
	componentDidMount(){
		let id = this.props.match.params.user_id;
		axios.get('https://5e5a28566a71ea0014e61c34.mockapi.io/api/v1/users/'+ id)
			.then(res => {
				this.setState({
					user: res.data
				});
			})
	}
	render(){
		const user = this.state.user ? (
			<div className="user">
				<h4>Name: {this.state.user.name}</h4>
				<h4>Email: {this.state.user.email}</h4>
			</div>
		) : (
			<div className="user">No user found</div>
		);
		return(
			<div className="container">
				<h4>User Details:</h4>
				<br/>
				<h4>{user}</h4>
			</div>
		)
	}
}

export default User;