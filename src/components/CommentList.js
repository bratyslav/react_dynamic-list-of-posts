import React from 'react';
import PropTypes from 'prop-types';

class CommentList extends React.Component {
  state = {
    isVisible: false
  }

  commentsToggle = () => {
    this.setState((prevState) => (
      { isVisible: !prevState.isVisible }
    ))
  }

  render() {
    const { comments } = this.props;
    const { isVisible } = this.state;

    return (
      <div className="post__comments-list">
        <div
          className="post__comments-list-title"
          onClick={this.commentsToggle}
        >
          <h3>
            Comments
          </h3>
        </div>
        {
          isVisible
          ? comments
          : ''    
        }
      </div>
    )
  }
};

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
};

export default CommentList;