import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
  state = {
    isVisible: false
  }

  commentsShow = () => {
    this.setState((prevState) => (
      { isVisible: !prevState.isVisible }
    ))
  }

  render() {
    const { comments, postId } = this.props;
    const { isVisible } = this.state;

    return (
      <div className="post__comments-list">
        <div
          className="post__comments-list-title"
          onClick={this.commentsShow}
        >
          <h3>
            Comments
          </h3>
        </div>
        {
          isVisible
          ? comments
              .filter((comment) => comment.postId === postId)
              .map((comment) => <Comment comment={comment} />)
          : ''    
        }
      </div>
    )
  }
};

export default CommentList;