import React from 'react';
import logo from './logo.svg';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';
import SearchBarContainer from './components/SearchBar/SearchBarContainer';

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
