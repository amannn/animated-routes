// @flow
import React from 'react';
import {Transition} from 'react-transition-group';
import {Route} from 'react-router-dom';
import FadeIn from './FadeIn';

const FadeInRoute = ({
  component: Component,
  ...rest
}: {
  component: ReactClass<*>
}) =>
  <Route
    {...rest}
    children={({match, ...childProps}) =>
      <Transition in={!!match} timeout={1}>
        <FadeIn visible={!!match}>
          <Component {...childProps} />
        </FadeIn>
      </Transition>}
  />;

export default FadeInRoute;
