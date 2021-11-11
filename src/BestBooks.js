import React from 'react';
import BookCarousel from './BookCarousel';
import axios from 'axios';
import AddBookModal from './AddBookModal';
import AddButton from './AddButton';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      show: false
    }
  }

  getBooks = async () => {
    const url = `${process.env.REACT_APP_SERVER_URL}/books?email=${this.props.email}`;
    let results = await axios.get(url);
    this.setState({ books: results.data })
  }

  postBooks = async (newBookObj) => {
    const url = `${process.env.REACT_APP_SERVER_URL}/books?email=${this.props.email}`;
    const results = await axios.post(url, newBookObj)
    let newBooksArr = [...this.state.books, results.data]
    this.setState({ books: newBooksArr });
  }

  deleteBooks = async (id) => {
    const url = `${process.env.REACT_APP_SERVER_URL}/books/${id}?email=${this.props.email}`;
    try {
      await axios.delete(url);
      let filteredBooks = this.state.books.filter(book => book._id !== id);
      this.setState({ books: filteredBooks });
    } catch (e) {
      console.error(e);
    }

  }

  closeModal = () => {
    this.setState({ show: false })
  }

  openModal = () => {
    this.setState({ show: true })
  }


  componentDidMount() {
    this.getBooks();
  }

  render() {

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <BookCarousel books={this.state.books} deleteBooks={this.deleteBooks} />
        ) : (
          <h3>No Books Found :(</h3>
        )}
        <AddButton openModal={this.openModal} user={this.props.user} />
        <AddBookModal postBooks={this.postBooks} show={this.state.show} closeModal={this.closeModal} />
      </>
    )
  }
}

export default BestBooks;
