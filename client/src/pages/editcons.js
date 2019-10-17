import React, { Component } from "react";
import Navbar from "../components/Navbar";

class EditCons extends Component {
  constructor(props) {
    super(props);
    this.state = { conventions: [], conID: "" };
  }
  onChange(e) {
    e.preventDefault();
    this.setState({ conID: e.target.value });
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
            <label for="select">Edit</label>
            <select onChange={this.onChange.bind(this)}>
              {this.state.conventions.map(conventions => (
                <option value={conventions.id}>{conventions.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default EditCons;
