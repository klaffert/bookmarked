import React from 'react';
import './App.css';

class BookCard extends React.Component {
  render() {
    const book = this.props.book.volumeInfo;
    return (
      <div>
        <div className="card">
          {/* <img className="card__image" src={book.imageLinks.smallThumbnail} /> */}

          <img
            className="card__image"
            src={book.imageLinks ? book.imageLinks.thumbnail : undefined}
            alt="book-cover"
          />
          <div className="card__container">
            <div className="card__content">
              <p className="card__title">{book.title}</p>
              <p className="card__text">{book.authors}</p>
              <p className="card__text">{book.publisher}</p>
              <button className="btn btn--block card__btn">Details</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookCard;
