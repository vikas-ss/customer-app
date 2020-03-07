import React from 'react';
import Customer from './../Customer';
import UserList from './../UserList';


class Home extends React.Component{
	state = {
	    customers : [
	      { name: 'Harry Potter', id:1 },
	      { name: 'Ron Weasley', id:2 },
	      { name: 'Hermione Granger', id:3 }
	    ]
	  };
	render(){
		return (
			<div className="container">
				<h4 className="center">Home</h4>
				<p>This is Home Page.</p>
				<UserList />
          		<ul>
          			<Customer customers = {this.state.customers} />
          		</ul>
			</div>
		)
	}
}

export default Home;