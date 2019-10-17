import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../components/signin/style.css";
class Welcome extends Component {
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

  componentWillMount() {}

  render() {
    return (
      <div className="signup-form">
        <form>
          <h2>Con-Goers</h2>

          <h3>What is Con-Goers</h3>
          <div className="form-group">
            <p>
              Con-Goers is a networking website for people who like to attend
              events such as Comic Con. Users can browse upcoming events, create
              their own events, and interact each other.
            </p>
          </div>
        </form>
        <div className="text-center">
          Have an account? <Link to="/signin">Sign In!</Link>
        </div>
        <div className="text-center">
          Don't have an account? <Link to="/signup">Sign Up Now!</Link>
        </div>
      </div>
    );
  }
}

export default Welcome;
