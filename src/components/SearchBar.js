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
            <label className="form-label">
              <i class="fa-brands fa-youtube fa-xl"></i> Search For Videos
            </label>
            <input
              className="form-control"
              type="text"
              value={this.state.searchTerm}
              onChange={this.onInputChange}
              placeholder="Search!"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
