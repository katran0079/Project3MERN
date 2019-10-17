import React, { Component } from "react";
class API extends Component {
  constructor(props) {
    super(props);
    this.state = { ConResponse: "", UsersResponse: "" };
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
    return (
      <div>
        <h1>CON INFO</h1>
        <p className="App-intro">{this.state.ConResponse}</p>
        <h1>USER INFO</h1>
        <p className="App-Intro">{this.state.UsersResponse}</p>
      </div>
    );
  }
}

export default API;
