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

  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks(searchInput) {
    const API_URL = `https://www.googleapis.com/books/v1/volumes?q=${searchInput}`;

    fetch(API_URL).then((response) => {
      response.json().then((data) => {
        this.setState({
          books: data.items,
        });
        console.log(this.state.books);
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>BookMarked</h1>
        <SearchBar
          onSearch={this.fetchBooks}
          searchValue={this.state.searchValue}
          books={this.state.books}
        />
        <Books books={this.state.books} />
      </div>
    );
  }
}

export default BookTable;
