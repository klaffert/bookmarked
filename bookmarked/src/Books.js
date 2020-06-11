import React from 'react';
import BookCard from './BookCard';

class Books extends React.Component {
  render() {
    const filterText = this.props.filterText;

    const cards = [];
    this.props.books.forEach((book) => {
      if (book.title.indexOf(filterText) === -1) {
        return;
      }
      cards.push(<BookCard book={book} key={book.title} />);
    });
    return <div>{cards}</div>;
  }
}

export default Books;
