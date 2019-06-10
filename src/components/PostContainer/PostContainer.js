import React from "react";
import Post from "./Post";

const PostsContainer = props => {
  return (
    <>
      {props.posts.map(post => (
        <Post 
          key={post.id} 
          post={post} 
          comments={post.comments} 
          likes={post.likes}
          timestamp={post.timestamp}
        />
      ))}
    </>
  );
};

export default PostsContainer;
