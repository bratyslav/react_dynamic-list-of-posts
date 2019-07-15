import React from 'react';
import User from './User';
import CommentList from './CommentList';

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

export default Post;