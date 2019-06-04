import React from "react";
import CommentSection from "../CommentSection/CommentSection";

const Post = props => {
  return (
    <div className="post">
      <div className="header">
        <img src={props.post.thumbnailUrl} alt="" />
        <span className="username">{props.post.username}</span>
      </div>
      <div className="content">
        <img src={props.post.imageUrl} alt="" />
      </div>
      <div className="likes">
        {props.post.likes} likes
      </div>
      <div className="comments">
          <CommentSection comments={props.post.comments}/>
      </div>
    </div>
  );
};

export default Post;
