import React from 'react';
import BookCarousel from './BookCarousel';

class BestBooks extends React.Component {

  componentDidMount() {
    this.props.getBooks()
  }

  render() {

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.props.books.length > 0 ?  (
          <BookCarousel books={this.props.books} deleteBooks={this.props.deleteBooks}/>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
