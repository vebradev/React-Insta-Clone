import React from "react";

const Post = props => {
  return (
    <div className="post">
      <div className="header">
        {props.post.username}
        <img src={props.post.thumbnailUrl} alt="" />
      </div>
      <div className="content">
        <img src={props.post.imageUrl} alt="" />
      </div>
    </div>
  );
};

export default Post;
