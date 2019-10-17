import React from "react";
import "./style.css";

function Jumbo() {
  return (
    <div className="row">
      <div className="col-sm-2"></div>
      <div className="col-sm-8 jumbotron">
        <h3>People</h3>
        <p>Discover new people and make new friends</p>
        <form>
          <input placeholder="Search by"></input>
          <button className="submit btn btn-primary"></button>
        </form>
      </div>
    </div>
  );
}

export default Jumbo;
