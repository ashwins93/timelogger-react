import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './components/LoginForm';
import Reboot from 'material-ui/Reboot';

const App = () => (
  <div>
    <Reboot />
    <LoginForm />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));