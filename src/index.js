import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Reboot from 'material-ui/Reboot';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './configureStore';
import Entry from './components/Entry';
import { Switch, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import { connect } from 'react-redux';
import { getToken, getUser } from './reducers';
import UserProfile from './components/UserProfile';

const store = configureStore();

const App = () => (
  <Provider store={ store } >
    <div>
      <Reboot />
      <Entry />
    </div>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));