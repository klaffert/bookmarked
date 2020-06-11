import React from 'react';

import Books from './Books';
import SearchBar from './SearchBar';

class BookTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      books: [],
    };
  }

  fetchBooks = (searchInput) => {
    var searchUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchInput}`;

    fetch(searchUrl)
      .then((response) => {
        console.log(response.json());
      })
      .then((data) => {
        this.setState({
          books: data.items,
        });
        console.log(data.items);
      });
  };

  render() {
    return (
      <div className="App">
        <h1>BookMarked</h1>
        <button onclick={this.fetchBooks}>click me</button>
        <SearchBar
          searchValue={this.state.searchValue}
          books={this.state.books}
        />
        <Books books={this.state.books} />
      </div>
    );
  }
}

export default BookTable;
