// @flow
import React from 'react';
import {Route} from 'react-router-dom';
import FadeIn from './FadeIn';

type Props = {
  component: ReactClass<*>
};

const FadeInRoute = ({component: Component, ...rest}: Props) =>
  <Route
    {...rest}
    children={({match, ...childProps}) =>
      <FadeIn visible={!!match}>
        <Component {...childProps} />
      </FadeIn>}
  />;

export default FadeInRoute;
