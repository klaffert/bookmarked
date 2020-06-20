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
    const API_URL = `https://www.googleapis.com/books/v1/volumes?q=${searchInput}&maxResults=36`;

    this.setState({
      loading: true,
    });

    fetch(API_URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then((data) => {
        this.setState({
          results: data.items,
          loading: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleSearch = (event) => {
    event.preventDefault();
    this.fetchBooks(this.state.query);
  };

  render() {
    return (
      <div className="app">
        <div className="bookmark">
          <span className="logo">bookmarked</span>
        </div>
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
