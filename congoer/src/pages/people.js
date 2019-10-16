import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
class People extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8 jumbotron"></div>
        </div>
      </div>
    );
  }
}

export default People;
