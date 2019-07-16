import React from 'react';

const FilterPost = ({ post }) => (
  <div>
  <h2 className="post__title">
    {post.title}
  </h2>
  <div className="post__body post__filtered">
    {post.body}
  </div>
</div>
);

export default FilterPost;