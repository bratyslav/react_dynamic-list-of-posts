import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comment }) => {
  const { user, body } = comment;

  return (
    <div>
      <div>{user.name}</div>
      <div>{user.email}</div>
      <div>{body}</div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.object.isRequired
};


export default Comment;