import React from 'react';
import axios from 'axios'
import BookCarousel from './BookCarousel';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */
  getBooks = async () => {
    const url=`${process.env.REACT_APP_SERVER_URL}/books?email=${this.props.user}`
    console.log(url);
    let response = await axios.get(url)
    console.log(response.data)
    this.setState ({
      books: response.data
    })

  }

  componentDidMount() {
    this.getBooks()
  }

  

  render() {

    /* TODO: render user's books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length > 0 ?  (
          <BookCarousel books={this.state.books}/>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
