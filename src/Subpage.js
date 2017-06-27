import React, {Component} from 'react';
import fadeInOut from './fadeInOut';

class Subpage extends Component {
  render() {
    return (
      <div className="Subpage">
        <h1>Subpage</h1>
        <p>Hello from a sub page!</p>
      </div>
    );
  }
}

export default fadeInOut(Subpage);
