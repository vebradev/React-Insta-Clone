import React from "react";
import PostsPage from "../PostContainer/PostsPage";
import LoginPage from "../Login/LoginPage";

function withAuth(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: false
      };
    }

    componentDidMount() {
      if (!localStorage.getItem("user")) {
        this.setState({ isLoggedIn: false });
      } else {
        this.setState({ isLoggedIn: true });
      }
    }

    render() {
      if (this.state.isLoggedIn) {
        return <PostsPage />;
      } else {
        return <LoginPage />;
      }
    }
  };
}

export default withAuth;
