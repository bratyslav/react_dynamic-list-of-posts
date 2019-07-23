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

  render() {
    const { filter } = this.state;
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
            .filter(post => {
              const searchStr = (post.title + post.body).toLowerCase();

              return searchStr.indexOf(filter) !== -1;
            })
            .map(post => (
              <Post post={post} />
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