import React from "react";

const CommentSection = props => {
  return (
    <>
      {props.comments.map(comment => (
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
};

export default CommentSection;
