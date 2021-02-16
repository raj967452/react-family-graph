import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect, useHistory, withRouter, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import { history } from '../_utils';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../Views/HomePage';
import { LoginPage } from '../Views/Login';
import { RegisterPage } from '../Views/Register';

function App() {
  const alert = useSelector(state => state.alert)
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location, action) => {
      // clear alert on view update
      dispatch(alertActions.clear());
    })
  }, [])
  return (
    <div className="App">      
          {alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>}
          <Router history={history}>
            <Switch>
              <PrivateRoute exact path="/" component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              <Redirect from="*" to="/" />
            </Switch>
          </Router>
    </div>
  );
}

export { App };
