import React from "react";
import PostsPage from "./components/PostContainer/PostsPage";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <PostsPage />
      </div>
    );
  }
}

export default App;
