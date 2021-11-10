import React from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import Login from './Login';
import Profile from './Profile';
import CreateBook from './CreateBook';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      username: '',
      books: []
    }
  }

  loginHandler = (a, b) => {
    this.setState({
      user: a,
    })
    this.setState({
      username: b,
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }

  getBooks = async () => {
    const url=`${process.env.REACT_APP_SERVER_URL}/books?email=${this.state.user}`
    let response = await axios.get(url)
    this.setState ({
      books: response.data
    })
    console.log(this.state.books);
  }

  postBooks = async (newBookObj) => {
    const url=`${process.env.REACT_APP_SERVER_URL}/books`
    let response = await axios.post(url, newBookObj);
    this.setState({ books: [...this.state.books, response.data] });
    console.log(this.state.books);
  }

  deleteBooks = async (id) => {
    const url=`${process.env.REACT_APP_SERVER_URL}/books/${id}`;
    await axios.delete(url);
    let filteredBooks = this.state.books.filter(book => book._id !== id);
    this.setState({ books: filteredBooks });
  }

  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              {this.state.user ? <BestBooks books={this.state.books} getBooks={this.getBooks} deleteBooks={this.deleteBooks}/> : <Login loginHandler={this.loginHandler}/>}
            </Route>
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
            <Route exact path="/profile">
              {this.state.user ? <Profile user={this.state.user} username={this.state.username} /> : <Login loginHandler={this.loginHandler}/>}
              </Route>
              <Route exact path="/create">
              {this.state.user ? <CreateBook postBooks={this.postBooks} /> : <Login loginHandler={this.loginHandler}/>}
              </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
