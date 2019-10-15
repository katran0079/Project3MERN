import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignUp from "../components/signup";
import axios from "axios";
class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", confirm: "", email: "" };
  }
  postUsers() {
    fetch("https://localhost:5000/api/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstParam: "yourValue",
        secondParam: "yourOtherValue"
      })
    });
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

  onEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  async onSubmit(e) {
    try {
      const response = await axios.post("https://localhost:5000/api/users", {
        name: this.state.username,
        email: this.state.email,
        password: this.state.password
      });
      console.log("👉 Returned data:", response);
    } catch (e) {
      console.log(`Axios request failed: ${e}`);
    }
  }
  componentWillMount() {}
  render() {
    return (
      <div className="signup-form">
        <form>
          <h2>Con-Goers</h2>
          <p className="hint-text">
            Network yourself and make friends along the way!
          </p>
          <h3>Sign Up</h3>

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
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
              required="required"
              onChange={this.onEmailChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <input type="checkbox" required="required"></input>
            <label className="checkbox-inline">
              I accept the terms of agreement.
            </label>
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-success btn-lg btn-block"
              onSubmit={this.onSubmit.bind(this)}
            >
              Sign Up Now
            </button>
          </div>
        </form>
        <div className="text-center">
          Already have an account? <Link to="/signin">Sign in</Link>
        </div>
      </div>
    );
  }
}

export default SignUpPage;
