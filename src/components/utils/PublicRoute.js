// React

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// CSS

import { isLogin } from './index';

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isLogin() && restricted ?
                <Redirect to="/questionhub`" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;