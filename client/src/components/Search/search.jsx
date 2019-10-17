import React from "react";
import { browserHistory as history } from "mongodb";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this._handleSubmit = this._handleSubmit.bind(this);
  }
  _handleSubmit(e) {
    e.preventDefault();
    history.push(`/user/${this.refs.userInput.value}`);
  }

  render() {
    return (
      <div className="search-page">
        <h3>Enter a GitHub username</h3>
        <form onSubmit={this._handleSubmit}>
          <input ref="userInput" className="search__input" type="text" />
          <button className="search__button">Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
