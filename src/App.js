import React, { Component } from 'react';
import './App.css';
import { getData } from './getData';
import PostList from './PostList';

class App extends Component {
  state = {
    postList: [],
    requested: false,
    loaded: false
  };

  setData = async () => {
    this.setState({ requested: true });

    const postList = await getData();

    this.setState({
      postList: postList,
      loaded: true
    });
  };

  render() {
    const { postList, requested, loaded } = this.state;

    return (
      <div>
        {
          loaded
          ? <PostList postList={postList} />
          : <button
              className="load-button"
              onClick={this.setData}
              disabled={requested}
            >
              {requested ? 'Loading...' : 'Load'}
            </button>
        }
      </div>
    );
  }
}

export default App;