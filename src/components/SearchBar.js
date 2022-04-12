import React from "react";

class SearchBar extends React.Component {
  state = {
    searchTerm: "",
  };

  onInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSearchSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div className="searchbar">
        <form onSubmit={this.onFormSubmit}>
          <div>
            <label className="form-label">Video Search</label>
            <input
              className="form-control"
              type="text"
              value={this.state.searchTerm}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
