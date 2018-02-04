import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = ({
  user,
  token,
  match
}) => (
  <div>
    <h1>Welcome { match.params.user }</h1>
    
  </div>
);

/* UserProfile.propTypes = {
  user: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
}; */

export default UserProfile;