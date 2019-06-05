import React from "react";
import dummyData from "../../dummy-data";
import SearchBarContainer from "../../components/SearchBar/SearchBarContainer";
import PostContainer from "../../components/PostContainer/PostContainer";

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      searchQuery: '',
      searchResults: ''
    };

    this.searchHandler = this.searchHandler.bind(this);
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  searchHandler = e => {
    this.setState({ searchQuery: e.target.value });
  };

  render() {
    return (
      <div className="insta">
        <SearchBarContainer search={this.searchHandler} value={this.state.searchQuery} />
        <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default PostsPage;