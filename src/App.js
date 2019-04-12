import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Container2 from './container/Container2';
import { Switch, Route } from "react-router-dom";
import Nav from './container/Nav';
import "bootstrap/dist/css/bootstrap.min.css";
import Productlist from './container/Productlist';
import Details from './container/Details';
import Cart from './container/Cart';
import Default from './container/Default';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
        <div className="container">
          <Switch>
            <Route exact path='/' component={Productlist}  />
            <Route path='/details' component={Details} />
            <Route path="/cart" component={Cart} />
            <Route component={Default} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;
