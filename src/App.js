import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Axios from './components/Axios';
import Template from './components/Template';
import Store from './components/Store';
import Navbar from './components/Navbar';
import UserDetail from './components/UserDetail';

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <Navbar />
        </div>
        <Switch>
          <Route exact path="/" component={Axios} />
          <Route path="/template" component={Template} />
          <Route path="/store" component={Store} />
          <Route path="/:user_id" component={UserDetail} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
