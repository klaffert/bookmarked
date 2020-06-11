import React from 'react';
import BookCard from './BookCard';

class Books extends React.Component {
  render() {
    return (
      <div class="cards">
        {this.props.books.map((book, index) => (
          <div key={index}>
            <BookCard book={book} />
          </div>
        ))}
      </div>
    );
  }
}

export default Books;
