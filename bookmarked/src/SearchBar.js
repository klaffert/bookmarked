import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form onSubmit={(event) => this.props.handleSearch(event)}>
        <input
          ref="query"
          type="text"
          placeholder="Search books..."
          value={this.props.query}
          onChange={(event) => this.props.handleOnChange(event)}
        />
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
    );
  }
}

export default SearchBar;
