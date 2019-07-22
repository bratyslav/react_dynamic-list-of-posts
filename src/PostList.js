import React from 'react';
import { getComments, getPosts, getUsers } from './api/data';
import Post from './components/Post';

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

    getComments()
      .then(data => {
        this.setState({ comments: data });
      })

    getPosts()
      .then(data => {
        this.setState({ posts: data });
      })

    getUsers()
      .then(data => {
        this.setState({ users: data });
      })
      .then(() => this.setState({ loaded: true }));
  };

  setFilter = (event) => {
    this.setState({ filterText: event.target.value });
  };

  todoFilter = (posts) => {
    const { filterText } = this.state;

    return posts.filter(post => {
      const filter = filterText.toLowerCase();
      const textToFilter = (post.title + post.body).toLowerCase();

      return textToFilter.indexOf(filter) !== -1
    })
  };

  todoMap = (posts) => {
    const { users, comments } = this.state;

    return posts.map(post => (
      <Post
        key={post.id}
        postId={post.id}
        posts={posts}
        users={users}
        comments={comments}
      />
    ))
  }

  render() {
    const {
      posts,
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
            onChange={this.setFilter}
          ></input>
          {
            filterText
              ? this.todoMap(this.todoFilter(posts))
              : this.todoMap(posts)
          }
        </div>

      : <button
          onClick={this.loadData}
          className="load-button"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Load'}
        </button>  
    );
  };
};



export default PostList;