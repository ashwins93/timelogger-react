import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div className="card mt-5 p-5 login-form container" style={{ width: "400px" }}>
    <h1 className="mb-4 text-center">Login</h1>
    <form>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input id="username" className="form-control" type="text" name="username" placeholder="username"/>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input id="password" className="form-control" type="text" name="password" placeholder="password" />
      </div>
      <button className="btn btn-primary btn-block" type="submit" name="action">Submit 
        <span> <i className="fas fa-paper-plane"></i></span>
      </button>
    </form>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));