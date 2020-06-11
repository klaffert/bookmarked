import React from 'react';
import BookCard from './BookCard';

class Books extends React.Component {
  render() {
    console.log(this.state);
    return (
      <div>
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
