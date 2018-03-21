import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Reboot from 'material-ui/Reboot';
import { Provider, connect } from 'react-redux';
import configureStore from './configureStore';
import Entry from './components/Entry';
import LoginForm from './components/LoginForm';
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

ReactDOM.render(<App />, window.document.getElementById('root'));
