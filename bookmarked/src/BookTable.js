import React from 'react';

import Books from './Books';
import SearchBar from './SearchBar';
import LoadingSpinner from './LoadingSpinner';

import './App.css';

class BookTable extends React.Component {
  state = {
    query: '',
    results: [],
    loading: false,
  };

  handleOnChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  };

  fetchBooks(searchInput) {
    const API_URL = `https://www.googleapis.com/books/v1/volumes?q=${searchInput}`;

    this.setState({
      loading: true,
    });

    fetch(API_URL).then((response) => {
      response.json().then((data) => {
        this.setState({
          results: data.items,
          loading: false,
        });
      });
    });
  }

  handleSearch = (event) => {
    event.preventDefault();
    this.fetchBooks(this.state.query);
  };

  render() {
    return (
      <div className="app">
        <h1 className="app__title">BookMarked</h1>
        <SearchBar
          handleSearch={this.handleSearch}
          handleOnChange={this.handleOnChange}
          query={this.state.query}
          books={this.state.results}
        />
        {this.state.loading ? (
          <LoadingSpinner />
        ) : (
          <Books books={this.state.results} />
        )}
      </div>
    );
  }
}

export default BookTable;
