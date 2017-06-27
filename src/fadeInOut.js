import React, {Component} from 'react';
import * as Animated from 'animated/lib/targets/react-dom';
import './fadeInOut.css';

const fadeInOut = WrappedComponent =>
  class AnimatedWrapper extends Component {
    constructor(props) {
      super(props);
      this.state = {
        animation: new Animated.Value(0)
      };
    }

    componentWillAppear(cb) {
      this.state.animation.setValue(1);
      cb();
    }

    componentWillEnter(cb) {
      setTimeout(() => {
        Animated.spring(this.state.animation, {toValue: 1}).start();
        cb();
      }, 100);
    }

    componentWillLeave(cb) {
      Animated.spring(this.state.animation, {toValue: 0}).start(cb);
    }

    render() {
      const {animation} = this.state;

      const style = {
        opacity: animation,
        transform: Animated.template`
          translate3d(0, ${this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ['12px', '0px']
          })}, 0)
        `
      };

      return (
        <Animated.div className="fadeInOut" style={style}>
          <WrappedComponent {...this.props} />
        </Animated.div>
      );
    }
  };

export default fadeInOut;