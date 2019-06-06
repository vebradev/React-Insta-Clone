import React from "react";
import styled from "styled-components";
import CommentSection from "../CommentSection/CommentSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";

const StyledPost = styled.div`
  display: block;
  width: 614px;
  margin: 0 auto 60px auto;
  background-color: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 3px;

  .header {
    display: flex;
    align-items: center;
    height: 28px;
    padding: 16px;

    span.username {
      font-size: 1rem;
      font-weight: bold;
      margin-right: 5px;
    }

    img {
      border-radius: 200px;
      max-width: 32px;
      margin-right: 16px;
      border: 1px solid #dbdbdb;
    }
  }

  .controls {
    padding: 10px 16px 0 16px;
    font-size: 1.5rem;

    .fa-heart {
      margin-right: 20px;
    }

    .fa-heart,
    .fa-comment {
      cursor: pointer;
    }
  }

  .likes {
    padding: 10px 16px;
    font-size: 1rem;
    font-weight: bold;
  }

  .timestamp {
    padding: 5px 16px;
    font-size: 0.65rem;
    color: #777777;
    text-transform: uppercase;
  }
`;

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.likes
    };

    this.hitLike = this.hitLike.bind(this);
  }

  hitLike = () => {
    const likes = this.state.likes + 1;
    this.setState({ likes });
  };

  render() {
    return (
      <StyledPost>
        <div className="header">
          <img src={this.props.post.thumbnailUrl} alt="" />
          <span className="username">{this.props.post.username}</span>
        </div>
        <div className="content">
          <img src={this.props.post.imageUrl} alt="" />
        </div>
        <div className="controls">
          <FontAwesomeIcon icon={faHeart} onClick={this.hitLike} />
          <FontAwesomeIcon icon={faComment} />
        </div>
        <div className="likes">{this.state.likes} likes</div>
        <div className="comments">
          <CommentSection
            comments={this.props.post.comments}
            timestamp={this.props.post.timestamp}
          />
        </div>
      </StyledPost>
    );
  }
}

export default Post;
