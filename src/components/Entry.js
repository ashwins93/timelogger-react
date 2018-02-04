import React from 'react';
import { Route, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { getToken, getUser } from '../reducers';
import UserProfile from './UserProfile';

const Entry = ({
  token,
  user
}) => (
  <Router>
    <Switch>
      <Route exact path='/' 
        render={ () =>
          token ?
          <Redirect to={ `/users/${user}` } />:
          <LoginForm />
        } 
      />
      <Route exact path='/users/:user' component={UserProfile} /> 
      <Redirect to='/' />
    </Switch>
  </Router>
);

const mapStateToProps = (state) => ({
  token: getToken(state),
  user: getUser(state),
});

export default connect(mapStateToProps)(Entry);