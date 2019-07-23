import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

class PostList extends React.Component {
  state = {
    filter: ''
  }

  setFilter = (event) => {
    const { value } = event.target;
    this.setState({ filter: value.toLowerCase() });
  };

  filterPostList = (post) => {
    const { filter } = this.state;
    const searchStr = (post.title + post.body).toLowerCase();

    return searchStr.indexOf(filter) !== -1;
  };

  render() {
    const { postList } = this.props;

    return (
      <React.Fragment>
        <input
          type="text"
          placeholder="Search..."
          onChange={this.setFilter}
        ></input>

        {
          postList
            .filter(post => this.filterPostList(post))
            .map(post => (
              <Post post={post} key={post.body} />
            ))
        }
      </React.Fragment>
    );
  };
};

PostList.propTypes = {
  postList: PropTypes.array.isRequired
};

export default PostList;