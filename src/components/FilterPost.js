import React from 'react';
import PropTypes from 'prop-types';

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

FilterPost.propTypes = {
  userId: PropTypes.number,
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
}.isRequired

export default FilterPost;