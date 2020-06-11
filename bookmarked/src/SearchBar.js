import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form>
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
