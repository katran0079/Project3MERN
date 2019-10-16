import React from "react";
import "./Appointments.css";

const Appointments = props => (
  <div className="Appointments" onClick={() => props.clickCount(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Card;

<div class="col-sm-2 sidenav well">
  <div class="thumbnail">
    <table class="table">
      <thead>
        <tr>
          <th scope="col-sm-2 sidenav">Your Appointments</th>
          <th></th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td style="width:90%">blank</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>;
