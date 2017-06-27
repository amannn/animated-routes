import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Home from './Home';
import Subpage from './Subpage';
import './App.css';

const FirstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="TopBar">
          <Link to="/">Home</Link>
          <Link to="/subpage">Subpage</Link>
        </div>
        <div className="App__children">
          <Route
            exact
            path="/"
            children={({match, ...rest}) =>
              <TransitionGroup component={FirstChild}>
                {match && <Home {...rest} />}
              </TransitionGroup>}
          />
          <Route
            exact
            path="/subpage"
            children={({match, ...rest}) =>
              <TransitionGroup component={FirstChild}>
                {match && <Subpage {...rest} />}
              </TransitionGroup>}
          />
        </div>
      </div>
    );
  }
}
