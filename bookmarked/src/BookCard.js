import React from 'react';
import './App.css';

class BookCard extends React.Component {
  render() {
    const book = this.props.book.volumeInfo;
    return (
      <div>
        <div class="card">
          <img
            class="card__image"
            src={book.imageLinks.smallThumbnail}
            alt="book-cover"
          />
          <div class="card__container">
            <div class="card__title">{book.title}</div>
            <p class="card__text">{book.authors}</p>
            <p class="card__text">{book.publisher}</p>
            <button class="btn btn--block card__btn">Details</button>
          </div>
        </div>
      </div>
    );
  }
}

export default BookCard;
