import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import API from "./pages/api";
import SignUpPage from "./pages/signup";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:5000/scrape")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }
  render() {
    return (
      <Router>
        <Route exact path="/api" component={API}></Route>
        <Route path="/signup" component={SignUpPage}></Route>
      </Router>
    );
  }
}

export default App;
