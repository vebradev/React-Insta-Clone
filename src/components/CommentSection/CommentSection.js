import React from "react";

const CommentSection = props => {
  return (
    <>
      {props.comments.map(comment => (
        <span key={comment.id}>
          <span className="username">
            {comment.username}
          </span>
          {comment.text}
        </span>
      ))}
      <input placeholder="Add a comment..."/>
    </>
  );
};

export default CommentSection;
