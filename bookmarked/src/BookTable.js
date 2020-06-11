import React from 'react';

import Books from './Books';
import SearchBar from './SearchBar';

class BookTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>BookMarked</h1>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <Books books={this.props.books} filterText={this.state.filterText} />
      </div>
    );
  }
}

export default BookTable;
