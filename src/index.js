import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './components/LoginForm';
import Reboot from 'material-ui/Reboot';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import configureStore from './configureStore';

const store = configureStore();

const App = () => (
  <Provider store={ store } >
    <div>
      <Reboot />
      <Router>
        <Route exact path='/' component={LoginForm} />
      </Router>
    </div>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));