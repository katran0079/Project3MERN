import React from "react";
import "./style.css";
function ConCards(props) {
  return (
    <div className="card">
      <img className="card-img-top" src={props.img} alt="venue" />
      <div className="card-body">
        <p className="card-title">{props.name}</p>
        <p className="card-text">Location: {props.location}</p>
        <p className="card-text">Country: {props.country}</p>
        <p className="card-text">Start Date: {props.start}</p>
        <p className="card-text">End Date: {props.end}</p>
        <p className="card-text">
          <a href={props.url}>Tickets</a>
        </p>
        <p className="card-text">Currently {props.count} are going!</p>
        <p className="card-text">Attendees: {props.attendees}</p>
        <button data-id={props.id} className="btn btn-primary">
          Save
        </button>
        <button data-id={props.id} className="btn btn-primary">
          Attend!
        </button>
      </div>
    </div>
  );
}

export default ConCards;
