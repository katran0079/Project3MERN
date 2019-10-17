import React, { Component } from "react";
import "../components/profile/style.css";
import Navbar from "../components/Navbar";
import Axios from "../../../server/node_modules/axios";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
      profile: "",
      name: "",
      tags: "",
      status: "",
      insta: "",
      twitter: "",
      _id: ""
    };
  }
  onStatusChange(e) {
    this.setState({ status: e.target.value });
  }

  onAboutChange(e) {
    this.setState({ profile: e.target.value });
  }
  onInstaChange(e) {
    this.setState({ insta: e.target.value });
  }

  onTwitterChange(e) {
    this.setState({ twitter: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    Axios.post("/api/users/" + this.state._id, {
      insta: this.state.insta,
      twitter: this.state.twitter,
      profile: {
        body: this.state.profile
      },
      status: {
        body: this.state.status
      }
    });
  }

  componentWillMount() {
    console.log(localStorage.getItem("user"));
    fetch("/api/users")
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          for (var i = 0; i < result.length; i++) {
            var username = result[i].name;
            if (username === localStorage.getItem("user")) {
              this.setState({
                _id: result[i]._id,
                img: result[i].img,
                name: result[i].name,
                tags: result[i].tags,
                status: result[i].status.body,
                twitter: result[i].twitter,
                insta: result[i].insta,
                profile: result[i].profile.body
              });
            }
            console.log(this.state);
          }
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
        <Navbar />
        <div className="signup-form">
          <form>
            <h2>Edit Profile</h2>
            <div className="form-group">
              <label for="status">Update Status</label>
              <input
                className="form-control"
                name="username"
                placeholder="status"
                onChange={this.onStatusChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label for="status">Update About Section</label>

              <input
                className="form-control"
                name="password"
                placeholder="profile"
                onChange={this.onAboutChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label for="instagram">Link instagram</label>

              <input
                className="form-control"
                name="instagram"
                placeholder="instagram"
                onChange={this.onInstaChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label for="twitter">Link twitter</label>
              <input
                className="form-control"
                name="twitter"
                placeholder="twitter"
                onChange={this.onTwitterChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <button
                onClick={e => this.onSubmit(e)}
                type="submit"
                className="btn btn-success btn-lg btn-block"
              >
                Submit changes
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditProfile;
