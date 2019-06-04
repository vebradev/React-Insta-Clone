import React from 'react';
import dummyData from './dummy-data';
import SearchBarContainer from './components/SearchBar/SearchBarContainer';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData,
    };
  }

  render() {
    return (
      <div>
        <SearchBarContainer />
        <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
