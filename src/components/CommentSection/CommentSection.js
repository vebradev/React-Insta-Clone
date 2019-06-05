import React from "react";
import uuid from "uuid";
import moment from "moment";
import PropTypes from "prop-types";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      newComment: ""
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.addNewComment = this.addNewComment.bind(this);
  }

  changeHandler = e => {
    this.setState({ newComment: e.target.value });
  };

  addNewComment = e => {
    e.preventDefault();
    this.setState({
      comments: this.state.comments.concat({
        id: uuid(),
        username: "root",
        text: this.state.newComment
      }),
      newComment: ""
    });
  };

  render() {
    return (
      <>
        {this.state.comments.map(comment => (
          <span key={comment.id}>
            <span className="username">{comment.username}</span>
            {comment.text}
          </span>
        ))}

        <div className="timestamp">
          {moment(this.props.timestamp, "MMMM Do YYYY, h:mm:ss a").fromNow()}
        </div>

        <form className="add-comment" onSubmit={this.addNewComment}>
          <input
            placeholder="Add a comment..."
            onChange={this.changeHandler}
            value={this.state.newComment}
          />
        </form>
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
