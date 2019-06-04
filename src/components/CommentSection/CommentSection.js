import React from "react";
import PropTypes from 'prop-types';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    };
  }

  render() {
    return (
      <>
        {this.props.comments.map(comment => (
          <span key={comment.id}>
            <span className="username">{comment.username}</span>
            {comment.text}
          </span>
        ))}
        <div className="add-comment">
          <input placeholder="Add a comment..." />
        </div>
      </>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;
