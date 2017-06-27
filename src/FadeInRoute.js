import React from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import {Route} from 'react-router-dom';
import FadeIn from './FadeIn';

const FirstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

const FadeInRoute = ({component: Component, ...rest}) =>
  <Route
    {...rest}
    children={({match, ...childProps}) =>
      <TransitionGroup component={FirstChild}>
        {match && <FadeIn><Component {...childProps} /></FadeIn>}
      </TransitionGroup>}
  />;

export default FadeInRoute;
