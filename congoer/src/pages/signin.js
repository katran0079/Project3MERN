import React, { Component } from "react";
import SignIn from "../components/signin";
class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", password: "", confirm: "", email: "" };
  }

  // callNews() {
  //   fetch("http://localhost:5000/scrape")
  //     .then(res => res.text())
  //     .then(res => this.setState({ ConResponse: res }));
  // }
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
    return <SignIn></SignIn>;
  }
}

export default SignInPage;
