import React, { Component } from "react";
import "../components/profile/style.css";
import Navbar from "../components/Navbar";
import Blurb from "../components/Blurb";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
      profile: "",
      name: "",
      tags: "",
      status: "",
      insta: "",
      twitter: ""
    };
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
        <Navbar></Navbar>

        <div className="container text-center">
          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">...</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Blurb
            img={this.state.img}
            name={this.state.name}
            profile={this.state.profile}
            tags={this.state.tags}
            status={this.state.status}
            insta={this.state.insta}
            twitter={this.state.twitter}
          ></Blurb>
          <div className="col-sm-7">
            <div className="row">
              <div className="col-sm-12">
                <div className="panel panel-default text-left">
                  <div className="panel-body">
                    <p>Status: {this.state.status}</p>
                    <button type="button" className="btn btn-default btn-sm">
                      <span className="glyphicon glyphicon-thumbs-up" /> Like
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid text-center" id="back">
              <div className="row">
                <div className="col-sm-3">
                  <div className="well">
                    <p>Tom</p>
                    <img
                      src="data:image/jpeg;base64,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"
                      className="img-circle avatar"
                      height={55}
                      width={55}
                      alt="Avatar"
                    />
                  </div>
                </div>
                <div className="col-sm-9">
                  <div className="well">
                    <p>Welcome to Mysp- I mean Con Goer!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
