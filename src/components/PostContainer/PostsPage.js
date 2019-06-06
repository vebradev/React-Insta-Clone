import React from "react";
import dummyData from "../../dummy-data";
import SearchBarContainer from "../../components/SearchBar/SearchBarContainer";
import PostContainer from "../../components/PostContainer/PostContainer";

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      searchResults: ''
    };

  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  searchHandler = e => {
    const results = this.state.posts.filter(post => {
      if (post.username.includes(e.target.value)) {
        console.log(post);
        return post;
      } else {
        return null;
      }
    });
    this.setState({ searchResults: results })
  };

  render() {
    return (
      <>
        <SearchBarContainer searchResults={this.searchHandler} />
        <PostContainer posts={this.state.searchResults !== '' ? this.state.searchResults : this.state.posts} />
      </>
    );
  }
}

export default PostsPage;