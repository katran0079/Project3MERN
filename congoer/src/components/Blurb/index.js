import React from "react";
import { Link } from "react-router-dom";
function Blurb(props) {
  return (
    <div className="col-sm-3 sidenav well">
      <div className="well">
        <p>{props.name}</p>
        <p>{props.tags}</p>
        <img
          src={props.img}
          className="img-circle"
          height={65}
          width={65}
          alt="Avatar"
        />
      </div>
      <div className="well">
        <h3>About</h3>
        <p>{props.profile}</p>
      </div>
      <div className="well">
        <h3>Social Media</h3>
        <p>Instagram: {props.insta}</p>
        <p>Twitter: {props.twitter}</p>
      </div>

      <Link to="/editprofile">Edit Profile</Link>
      <div className="col-sm-3 sidenav"></div>
    </div>
  );
}

export default Blurb;
