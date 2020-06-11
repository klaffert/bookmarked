import React from 'react';
import './App.css';

class BookCard extends React.Component {
  render() {
    const book = this.props.book.volumeInfo;
    return (
      <div class="card">
        <img src={book.imageLinks.smallThumbnail} alt="book-cover" />
        <div class="container">
          <p>Title: {book.title}</p>
          <p>Author: {book.authors}</p>
          <p>Publisher: {book.publisher}</p>
        </div>
      </div>
    );
  }
}

export default BookCard;
