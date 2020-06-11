import React from 'react';

import Books from './Books';
import SearchBar from './SearchBar';

class BookTable extends React.Component {
  state = {
    query: '',
    results: [],
  };

  // componentDidMount() {
  //   this.fetchBooks();
  // }

  handleOnChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  };

  fetchBooks(searchInput) {
    const API_URL = `https://www.googleapis.com/books/v1/volumes?q=${searchInput}`;

    fetch(API_URL).then((response) => {
      response.json().then((data) => {
        this.setState({
          results: data.items,
        });
        console.log(this.state.results);
      });
    });
  }

  // handleSearch = () => {
  //   this.fetchBooks(this.state.query);
  // };

  handleSearch = (event) => {
    event.preventDefault();
    this.fetchBooks(this.state.query);
  };

  render() {
    return (
      <div className="App">
        <h1>BookMarked</h1>
        {/* <button onClick={this.handleSearch}>Click ME</button> */}
        <SearchBar
          handleSearch={this.handleSearch}
          handleOnChange={this.handleOnChange}
          query={this.state.query}
          books={this.state.results}
        />
        <Books books={this.state.results} />
      </div>
    );
  }
}

export default BookTable;
