import React from 'react';
import PropTypes from 'prop-types';

const User = ({ person }) => (
  <div>
    <div>
      {person.name}
    </div>
    <div>
      {person.email}
    </div>
    <div>
      {person.address.city}
    </div>
  </div>
);

User.propTypes = {
  person: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.object,
    phone: PropTypes.string,
    website: PropTypes.string,
    company: PropTypes.object
  }).isRequired
};

export default User;