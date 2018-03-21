import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import * as actions from '../actions';

import {
  getLogs,
  getIsLoading,
  getToken,
  getUser,
} from '../reducers';

class UserProfile extends Component {
  fetchData() {
    const {
      match,
      fetchLogs,
    } = this.props;

    fetchLogs(match.params.user);
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const {
      match,
      logs,
      isLoading,
    } = this.props;

    return (
      <div>
        <h1>Welcome { match.params.user }</h1>
        {
          isLoading ?
            <p>Loading...</p> :
            <ul>
              {
                logs ?
                  logs.map(log => <li key={log}>{ new Date(log).toLocaleString() }</li>) :
                  <li>error</li>
              }
            </ul>
        }
      </div>
    );
  }
}
UserProfile.propTypes = {
  logs: PropTypes.array,
  isLoading: PropTypes.boolean,
};

const mapStateToProps = state => ({
  logs: getLogs(state),
  isLoading: getIsLoading(state),
  token: getToken(state),
  user: getUser(state),
});

export default connect(
  mapStateToProps,
  actions,
)(UserProfile);
