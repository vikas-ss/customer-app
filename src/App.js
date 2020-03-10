import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import User from './components/User';

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <Navbar />
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/:user_id" component={User} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
