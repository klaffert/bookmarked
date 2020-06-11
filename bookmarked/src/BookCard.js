import React from 'react';
import './App.css';

class BookCard extends React.Component {
  render() {
    const book = this.props.book;
    return (
      <div class="card">
        <img src={this.props.book.image} alt="book-cover" />
        <div class="container">
          <h4>{book.title}</h4>
          <p>{book.author}</p>
          <p>{book.publisher}</p>
        </div>
      </div>
    );
  }
}

export default BookCard;
