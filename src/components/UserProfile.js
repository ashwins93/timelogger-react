import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class UserProfile extends Component { 
  
  fetchData = () => {
    axios.get('/api/time', {
      params: {
        name: this.props.match.params.user
      }
    })
    .then(data => this.setState({ logs: data }))
    .catch(err => console.log(err));    
  }
  
  componentDidMount() {
   this.fetchData(); 
  }
  
  render() {
    const {
      user,
      token,
      match
    } = this.props;

    return (
      <div>
        <h1>Welcome { match.params.user }</h1>
        
      </div>
    );
  }
}
/* UserProfile.propTypes = {
  user: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
}; */

export default UserProfile;