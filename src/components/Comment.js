import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comment }) => (
  <div className="post__comment">
    <div>
      {comment.name}
    </div>
    <div>
      {comment.email}
    </div>
    <div className="post__comment-body">
      {comment.body}
    </div>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.object.isRequired
};

export default Comment;