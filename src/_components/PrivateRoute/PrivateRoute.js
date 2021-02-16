import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, path, roles, ...rest }) => (
    <Route path={path}  {...rest} render={ props => (
        (!localStorage.getItem('user')) ? <Redirect to={{ pathname: '/login', state: { from: props.location } }} /> : <Component {...props} />
    )} />
);