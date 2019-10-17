import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ConCards from "../components/ConCards";
import Axios from "../../../server/node_modules/axios";

class Cons extends Component {
  constructor(props) {
    super(props);
    this.state = { conventions: [] };
  }

  componentWillMount() {
    fetch("/scrape")
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({ conventions: result });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          console.log(error);
        }
      );
  }
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8 jumbotron">
            <h3>Upcoming Conventions</h3>
            <Link to="/editconventions">Add/Edit Conventions</Link>
            {this.state.conventions.map(conventions => (
              <ConCards
                id={conventions.id}
                key={conventions.id}
                name={conventions.name}
                location={conventions.venueInfo[0].name}
                country={conventions.venueInfo[0].country.name}
                start={conventions.start}
                end={conventions.end}
                img={conventions.img.url}
                url={conventions.url}
                attendees={conventions.attendees}
                count={conventions.attendees.length}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Cons;
