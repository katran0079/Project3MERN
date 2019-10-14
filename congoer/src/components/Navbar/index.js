import React from "react";

function Navbar() {
  return (
    <nav class="navbar navbar-inverse" id="pink">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">
            Con Goer!
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
  );
}
export default Navbar;
