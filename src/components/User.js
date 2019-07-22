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
  person: PropTypes.object.isRequired
};

export default User;