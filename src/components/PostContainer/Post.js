import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.likes,
    };

    this.hitLike = this.hitLike.bind(this);
  }

  hitLike = () => {
    const likes = this.state.likes + 1;
    this.setState({ likes });
  }

  render() {
    return (
      <div className="post">
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
        <div className="likes">
          {this.state.likes} likes
        </div>
        <div className="comments">
          <CommentSection 
            comments={this.props.post.comments} 
            timestamp={this.props.post.timestamp} 
          />
        </div>
      </div>
    );
  }
}

export default Post;
