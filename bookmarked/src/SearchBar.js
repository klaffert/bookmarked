import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form onSubmit={this.handleSearch}>
        <input
          type="text"
          placeholder="Search for books..."
          value={this.props.searchValue}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default SearchBar;
