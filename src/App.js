import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  state = {
    name: 'Harry Potter',
    age: 30
  };

  handleClick = (e) => {
    this.setState({
      name: 'Mohit SIngla',
      age: 29
    });
    console.log(this.state);
  }
  handleMouseOver = (e) => {
    console.log(e.target);
  }
  handleCopy = (e) => {
    console.log("Do not try to steal.");
  }
  render(){
    return(
      <div>
        <h1>Hello React</h1>
        <p>My Name is {this.state.name} and I am {this.state.age}</p>
        <button onClick={this.handleClick}>Click Me</button>
        <button onMouseOver={this.handleMouseOver}>MouseOver Me</button>
        <p onCopy={this.handleCopy}>What we think, we become.</p>
      </div>
    );
  }
}

export default App;
