import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import FadeInRoute from './FadeInRoute';
import Home from './Home';
import Subpage from './Subpage';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="TopBar">
          <Link to="/">Home</Link>
          <Link to="/subpage">Subpage</Link>
        </div>
        <div className="App__children">
          <Route exact path="/" component={Home} />
          <Route exact path="/subpage" component={Subpage} />
        </div>
      </div>
    );
  }
}
