import React from 'react';
import { comments, posts, users } from './api/data';
import Post from './components/Post';
import FilterPost from './components/FilterPost';

class PostList extends React.Component {
  state = {
    comments: [],
    posts: [],
    users: [],

    loading: false,
    loaded: false,
    filterText: ''
  };

  loadData = () => {
    this.setState({ loading: true });
    console.log('start')

    comments()
      .then(data => {
        this.setState({ comments: data });
      })

    posts()
      .then(data => {
        this.setState({ posts: data });
      })

    users()
      .then(data => {
        this.setState({ users: data });
      })
      .then(() => this.setState({ loaded: true }));
  };

  filter = (event) => {
    this.setState({ filterText: event.target.value });
  };

  render() {
    const {
      comments,
      posts,
      users,
      loading,
      loaded,
      filterText
    } = this.state;

    return(
      loaded
      ? <div className="posts-list">
          <input
            type="text"
            placeholder="Search..."
            onChange={this.filter}
          ></input>
          {
            filterText
              ? posts
                  .filter(post => {
                    const filter = filterText.toLowerCase();
                    const textToFilter = (post.title + post.body).toLowerCase();

                    return textToFilter.indexOf(filter) !== -1
                  })
                  .map(post => (
                    <FilterPost post={post} />
                  ))
              : posts.map(post => (
                  <Post
                    postId={post.id}
                    posts={posts}
                    users={users}
                    comments={comments}
                  />
                ))
          }
        </div>

      : <button
          onClick={this.loadData}
        >
          {loading ? 'Loading...' : 'Load'}
        </button>  
    );
  };
};

export default PostList;