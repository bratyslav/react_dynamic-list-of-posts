import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

class CommentList extends React.Component {
  state = {
    isVisible: false
  };

  toggleCommentsVisibility = () => {
    this.setState(prevState => ({
      isVisible: !prevState.isVisible
    }))
  };

  render() {
    const { isVisible } = this.state;
    const { comments } = this.props;

    return (
      <div>
        <div onClick={this.toggleCommentsVisibility}>
          Comments:
        </div>

        {
          isVisible
          ? comments.map(comment => <Comment comment={comment} />)
          : ''  
        }
      </div>
    );
  };
};

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
};

export default CommentList;