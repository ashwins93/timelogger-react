import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMessage, getIsWaiting } from '../reducers';
import * as actions from '../actions';
import StyledForm from './StyledForm';

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = name => event => (
    this.setState({
      [name]: event.target.value,
    })
  );

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.authenticate(this.state.username, this.state.password);
  }

  render() {
    const { message, isWaiting } = this.props;

    return (
      <StyledForm
        username={ this.state.username }
        password={ this.state.password }
        handleUserChange={ this.handleChange('username') }
        handlePasswordChange={ this.handleChange('password') }
        handleSubmit={ this.handleSubmit }
        isWaiting={ isWaiting }
        message={ message }
      />
    );
  }
}

const mapStateToProps = state => ({
  message: getMessage(state),
  isWaiting: getIsWaiting(state),
});

export default connect(
  mapStateToProps,
  actions,
)(LoginForm);
