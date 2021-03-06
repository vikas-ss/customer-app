import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';
import { Alert } from 'reactstrap';


class UserList extends React.Component {
    render(){
		return(
      <div>
      <h4>Customer List</h4>
			<Table>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Harry</td>
          <td>Potter</td>
          <td>@harry</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Ron</td>
          <td>Weasley</td>
          <td>@ron</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Hermione</td>
          <td>Granger</td>
          <td>@hermione</td>
        </tr>
      </tbody>
    </Table>
    </div>
		);
	}
}

export default UserList;