import React from 'react';
import User from './User';
import CommentList from './CommentList';
import PropTypes from 'prop-types';

const Post = ({ postId, posts, users, comments }) => {
  const post = posts.find((post) => post.id === postId);

  return (
    <div>
      <h2 className="post__title">
        {post.title}
      </h2>
      <div className="post__body">
        {post.body}
      </div>
      <User 
        person={users.find((person) => person.id === post.userId)}
      />
      <CommentList 
        postId={postId}
        comments={comments}
      />
    </div>
  );
};

Post.propTypes = {
  postId: PropTypes.number.isRequired,
  comments: PropTypes.array.isRequired,
  posts: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired
};

export default Post;