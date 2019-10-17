import React, { Component } from "react";
import Navbar from "../components/Navbar";
import UserCards from "../components/UserCards";
class People extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentWillMount() {
    fetch("/api/users")
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          const array = [];
          array.push(result);
          console.log(array);
          this.setState({ users: result });
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
            <h3>Fellow Con Goers</h3>
            {this.state.users.map(users => (
              <UserCards
                id={users.id}
                key={users.id}
                name={users.name}
                img={users.img}
                profile={users.profile.body}
                insta={users.insta}
                twitter={users.twitter}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default People;
