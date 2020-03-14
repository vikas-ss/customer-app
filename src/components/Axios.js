import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';


class Axios extends React.Component{
	state = {
	 	users : []
	 };
	componentDidMount(){
		axios.get('https://5e5a28566a71ea0014e61c34.mockapi.io/api/v1/users')
		.then(res => {
			this.setState({
				users : res.data.slice(0,10)
			});
		})
	}
	render(){
		const {users} = this.state;
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
				<h3>Records fetched from axios</h3>
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

export default Axios;