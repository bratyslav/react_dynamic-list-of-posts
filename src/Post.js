import React from 'react';
import User from './User';
import CommentList from './CommentList';
import PropTypes from 'prop-types';

const Post = ({ post }) => (
  <div>
    <User user={post.user} />

    <div>{post.title}</div>

    <div>{post.body}</div>

    <CommentList comments={post.comments} />

    <hr />
  </div>
);

Post.propTypes = {
  post: PropTypes.object.isRequired
};

export default Post;