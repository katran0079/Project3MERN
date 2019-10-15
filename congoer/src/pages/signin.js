import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../components/signin/style.css";
class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", confirm: "" };
  }

  // callNews() {
  //   fetch("http://localhost:5000/scrape")
  //     .then(res => res.text())
  //     .then(res => this.setState({ ConResponse: res }));
  // }
  onUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  onPasswordChange(e) {
    this.setState({ password: e.target.value });
  }
  callUsers() {
    fetch("http://localhost:5000/api/users")
      .then(res => res.text())
      .then(res => this.setState({ UsersResponse: res }));
  }
  callCons() {
    fetch("http://localhost:5000/api/cons")
      .then(res => res.text())
      .then(res => this.setState({ ConResponse: res }));
  }
  componentWillMount() {
    this.callUsers();
    this.callCons();
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
            <button type="submit" className="btn btn-success btn-lg btn-block">
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
