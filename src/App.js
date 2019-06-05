import React from "react";
import withAuth from "./components/Authenticate/withAuthenticate";
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
        <ComponentFromWithAuth />
      </div>
    );
  }
}

const ComponentFromWithAuth = withAuth(PostsPage);

export default App;