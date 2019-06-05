import React from "react";
import Logo from '../../assets/inLogo.png';
import "../../App.css";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  usernameHandler = e => {
    this.setState({ username: e.target.value });
  };

  passwordHandler = e => {
    this.setState({ password: e.target.value });
  };

  submitHandler = e => {
      const user = this.state.username;
      localStorage.setItem('user', user);
      window.location.reload();
  }

  render() {
    return (
      <div>
        <form className="loginForm">
        <img src={Logo} alt="Instagram Clone Logo"/>
          <input
            placeholder="Username"
            value={this.state.username}
            onChange={this.usernameHandler}
          />
          <input
            placeholder="Password"
            value={this.state.password}
            onChange={this.passwordHandler}
          />
          <button onClick={this.submitHandler}>Login</button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
