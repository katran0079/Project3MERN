import React from "react";

function UserCards(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.img} className="profile-pic" />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>About:</strong> {props.profile}
          </li>
          <li>
            <strong>Instagram:</strong> {props.insta}
          </li>
          <li>
            <strong>Twitter:</strong> {props.twitter}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserCards;
