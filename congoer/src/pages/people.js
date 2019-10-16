import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
class People extends Component {
  render() {
    return (
      <nav class="navbar navbar-inverse" id="pink">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">
              Artist Alley
            </a>
          </div>
          <ul class="nav navbar-nav">
            <li>
              <a href="#">Cosplayers</a>
            </li>
            <li>
              <a href="#">Artists</a>
            </li>
            <li>
              <a href="#">Photographers</a>
            </li>
            <li>
              <a href="#">Prop Makers</a>
            </li>
            <li>
              <a href="#">Costume Makers</a>
            </li>
          </ul>
        </div>
      </nav>
      // <div>
      //   <Navbar></Navbar>
      //   <div className="row">
      //     <div className="col-sm-2"></div>
      //     <div className="col-sm-8 jumbotron"></div>
      //   </div>
      // </div>
    );
  }
}

export default People;
