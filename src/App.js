import React from 'react';
import Customer from './Customer';
import UserList from './UserList';

class App extends React.Component{
  state = {
    customers : [
      { name: 'Harry Potter', id:1 },
      { name: 'Ron Weasley', id:2 },
      { name: 'Hermione Granger', id:3 }
    ]
  };
  render(){
    return(
      <div>
        <h1>Customer List</h1>

        <UserList />

        <ul>
        <Customer customers = {this.state.customers} />
        </ul>
      </div>
    );
  }
}

export default App;
