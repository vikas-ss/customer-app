import React from 'react';
import Customer from './Customer';

class App extends React.Component{
  state = {
    name: 'Your Name Here'
  };

  /*handleClick = (e) => {
    this.setState({
      name: 'Mohit Singla',
      age: 29
    });
    console.log(this.state);
  }
  handleMouseOver = (e) => {
    console.log(e.target);
  }
  handleCopy = (e) => {
    console.log("Do not try to steal.");
  }*/
  handleChange = (e) => {
    this.setState({
      name:e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
  }
  render(){
    return(
      <div>
        <h1>Customer List</h1>
        <ul>
        <Customer />
        <li>{this.state.name}</li>
        </ul>
        {/*<button onClick={this.handleClick}>Click Me</button>
        <button onMouseOver={this.handleMouseOver}>MouseOver Me</button>
        <p onCopy={this.handleCopy}>What we think, we become.</p>*/}
        <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} />
        <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
