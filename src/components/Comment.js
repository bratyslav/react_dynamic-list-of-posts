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
  comment: PropTypes.shape({
    postId: PropTypes.number,
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    body: PropTypes.string
  }).isRequired
};

export default Comment;