import React from "react";
import styled from "styled-components";
import Logo from "../../assets/inLogo.png";
import "../../App.css";

const StyledLoginForm = styled.form`
  width: 270px;
  margin: 100px auto 0;
  padding: 40px;
  display: flex;
  flex-direction: column;
  color: #262626;
  background-color: #fff;
  border: 1px solid #e6e6e6;

  img {
    max-width: 175px;
    margin: 0 auto 20px auto;
  }

  input {
    background: #fafafa;
    border: solid 1px #dbdbdb;
    text-align: center;
    border-radius: 3px;
    color: #212121;
    font-size: 0.8rem;
    padding: 7px;
    margin: 3px 0;
    outline: none;
  }

  button {
    padding: 7px;
    margin: 10px 0 0 0;
    background-color: #3897f0;
    border: 1px solid #3897f0;
    border-radius: 3px;
    color: #fff;
    font-size: 0.8rem;
    cursor: pointer;
    outline: none;

    &:hover {
      background-color: rgb(37, 131, 219);
    }

    &:active {
      background-color: rgb(88, 164, 235);
    }
  }
`;

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
    localStorage.setItem("user", user);
  };

  render() {
    return (
      <>
        <StyledLoginForm>
          <img src={Logo} alt="Instagram Clone Logo" />
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
        </StyledLoginForm>
      </>
    );
  }
}

export default LoginPage;
