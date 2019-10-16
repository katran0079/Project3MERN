import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-inverse" id="pink">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            Con Goer!
          </Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link to="/cons">Cons</Link>
          </li>
          <li>
            <Link to="/people">People</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
