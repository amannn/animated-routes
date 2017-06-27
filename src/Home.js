import React, {Component} from 'react';
import fadeInOut from './fadeInOut';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
        <p>Hello from the home page!</p>
      </div>
    );
  }
}

export default fadeInOut(Home);
