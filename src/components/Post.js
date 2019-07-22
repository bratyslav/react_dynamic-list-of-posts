import React from 'react';
import User from './User';
import CommentList from './CommentList';
import PropTypes from 'prop-types';
import Comment from './Comment';

const getComments = (comments, postId) => {
  return comments
    .filter((comment) => comment.postId === postId)
    .map((comment) => <Comment comment={comment} key={comment.id} />)
}

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
        comments={getComments(comments, postId)}
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