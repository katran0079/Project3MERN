import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../components/signin/style.css";
class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", confirm: "" };
  }

  onUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  onPasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    fetch("/api/users")
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          for (var i = 0; i < result.length; i++) {
            var username = result[i].name;
            var password = result[i].password;
            if (username === this.state.username) {
              if (password === this.state.password) {
                localStorage.setItem("user", this.state.username);
                window.location.href = "/profile";
              } else {
                return console.log("Your username and/or password is invalid.");
              }
            }
          }
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          console.log(error);
        }
      );
  }

  componentWillMount() {
    localStorage.removeItem("user");
  }

  render() {
    return (
      <div className="signup-form">
        <form>
          <h2>Con-Goers</h2>
          <p className="hint-text">
            Network yourself and make friends along the way! \{" "}
          </p>
          <h3>Sign In</h3>
          <div className="form-group">
            <input
              className="form-control"
              name="username"
              placeholder="Username"
              required="required"
              onChange={this.onUsernameChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              name="password"
              placeholder="Password"
              required="required"
              onChange={this.onPasswordChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <button
              onClick={e => this.onSubmit(e)}
              type="submit"
              className="btn btn-success btn-lg btn-block"
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="text-center">
          Don't have an account? <Link to="/signup">Sign Up Now!</Link>
        </div>
      </div>
    );
  }
}

export default SignInPage;
