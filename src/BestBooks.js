import React from 'react';
import BookCarousel from './BookCarousel';
import axios from 'axios';
import AddBookModal from './AddBookModal';
import AddButton from './AddButton';
// import { withAuth0 } from '@auth0/auth0-react'

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showPostModal: false,
      showUpdateModal: false
    }
  }

  getBooks = async () => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      const config = {
        headers: { "Authorization": `Bearer ${jwt}` },
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: './books'
      }
      let bookResults = await axios(config);
      this.setState({ books: bookResults.data })
    }
  }

  postBooks = async () => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      const config = {
        headers: { "Authorization": `Bearer ${jwt}` },
        method: 'post',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: './books'
      }
    let newBooksArr = await axios(config)
    this.setState({ books: newBooksArr.data });
  }
}

  deleteBooks = async (id) => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      const config = {
        headers: { "Authorization": `Bearer ${jwt}` },
        method: 'delete',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: './books'
      }
    try {
      await axios.delete(config);
      let filteredBooks = this.state.books.filter(book => book._id !== id);
      this.setState({ books: filteredBooks });
    } catch (e) {
      console.error(e);
    }
  }
}

  putBooks = async (id, updateBookObj) => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      const config = {
        headers: { "Authorization": `Bearer ${jwt}` },
        method: 'put',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: './books'
      }
    try {
      let results = await axios.put(config, updateBookObj);
      let filteredBooks = this.state.books.filter(book => book._id !== id);
      this.setState({ books: filteredBooks });
      let updatedBooksArr = [...this.state.books, results.data]
      this.setState({ books: updatedBooksArr });
    } catch (e) {
      console.error(e);
    }
  }
}

  closeModal = () => {
    this.setState({ showPostModal: false })
  }

  openModal = () => {
    this.setState({ showPostModal: true })
  }

  closeUpdateModal = () => {
    this.setState({ showUpdateModal: false })
  }

  openUpdateModal = () => {
    this.setState({ showUpdateModal: true })
  }

  componentDidMount() {
    this.getBooks();
  }

  render() {

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <BookCarousel books={this.state.books} deleteBooks={this.deleteBooks} putBooks={this.putBooks} openUpdateModal={this.openUpdateModal} closeUpdateModal={this.closeUpdateModal} showUpdateModal={this.state.showUpdateModal} />
        ) : (
          <h3>No Books Found :(</h3>
        )}
        <AddButton openModal={this.openModal} />
        <AddBookModal postBooks={this.postBooks} show={this.state.showPostModal} closeModal={this.closeModal} />
      </>
    )
  }
}

export default BestBooks;
