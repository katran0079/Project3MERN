import React, { Component } from "react";
import SignUp from "../components/signup";
class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", password: "", confirm: "", email: "" };
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
    return <SignUp></SignUp>;
  }
}

export default SignUpPage;
