import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search for books..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
        <button>Search</button>
      </form>
    );
  }
}

export default SearchBar;
