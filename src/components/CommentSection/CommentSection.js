import React from "react";
import styled from "styled-components";
import uuid from "uuid";
import moment from "moment";
import PropTypes from "prop-types";

const StyledComments = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    margin: 0 0 7px 0;
    padding: 0 16px;
    font-size: 1rem;

    .username {
      font-size: 1rem;
      font-weight: bold;
      margin-right: 5px;
    }
  }

  .add-comment {
    padding: 0 16px;
    margin: 10px 0 0 0;
    border-top: 1px solid #dbdbdb;

    input {
      width: 100%;
      padding: 16px 0;
      border: 0;
      outline: 0;
      font-size: 0.9rem;
      color: #000;
    }
  }
`;

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
        username: localStorage.getItem("user"),
        text: this.state.newComment
      }),
      newComment: ""
    });
  };

  render() {
    return (
      <StyledComments>
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
      </StyledComments>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;
