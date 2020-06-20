import React from 'react';

class SearchBar extends React.Component {
  render() {
    const isEnabled = this.props.query.length > 0;
    return (
      <form onSubmit={(event) => this.props.handleSearch(event)}>
        <input
          type="text"
          placeholder="Search books..."
          value={this.props.query}
          onChange={(event) => this.props.handleOnChange(event)}
        />
        <button className="submit" disabled={!isEnabled}>
          <i className="fas fa-search"></i>
        </button>
      </form>
    );
  }
}

export default SearchBar;
