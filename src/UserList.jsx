import React from 'react';
import { Table } from 'reactstrap';


class UserList extends React.Component {
    render(){
		return(
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
		);
	}
}

export default UserList;