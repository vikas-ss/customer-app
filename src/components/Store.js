import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Store extends React.Component{
	render(){
		const {users} = this.props;
		const userList = users.length ? (
			users.map(user => {
				return (
					<tr key={user.id}>
			          <td>{user.id}</td>
			          <td><Link to = {'/' + user.id}>{user.name}</Link></td>
			          <td>{user.email}</td>
			        </tr>
				)
			})
		) : (
			<tr>
			    <td colSpan='3'>No users found</td>
			</tr>
		); 
		return (
			<div className="container">
				<h3>Records fetched from Redux Store</h3>
          		<Table responsive>
			      <thead>
			        <tr>
			          <th>#</th>
			          <th>Name</th>
			          <th>Email</th>
			        </tr>
			      </thead>
			      <tbody>
			      {userList}
			      </tbody>
    			</Table>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.users
	}	
}

export default connect(mapStateToProps)(Store);