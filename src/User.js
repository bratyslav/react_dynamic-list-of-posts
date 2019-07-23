import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => {
  const { name, email, address } = user;

  return (
    <div>
      <div>{name}</div>
      <div>{email}</div>
      <div>{address}</div>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired
};

export default User;