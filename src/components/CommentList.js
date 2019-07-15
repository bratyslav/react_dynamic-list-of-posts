import React from 'react';
import Comment from './Comment';

const CommentList = ({ postId, comments }) => (
  <div className="post__comments-list">
    <div className="post__comments-list-title">
      Comments:
    </div>
    {
      comments
        .filter((comment) => comment.postId === postId)
        .map((comment) => <Comment comment={comment} />)
    }
  </div>
);

export default CommentList;