import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      </BrowserRouter>
    );
  }
}

export default App;
