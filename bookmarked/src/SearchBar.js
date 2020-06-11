import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form onSubmit={(event) => this.props.handleSearch(event)}>
        <input
          type="text"
          placeholder="Search for books..."
          value={this.props.query}
          onChange={(event) => this.props.handleOnChange(event)}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SearchBar;
