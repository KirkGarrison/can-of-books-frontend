import { Component } from "react";

class LoginForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: '',
      username: ''
    }
  }

  handleClick = () => {
    this.props.loginHandler(this.state.user, this.state.username);
  }

  handleChange = (e) => {
    this.setState({ user: e.target.value })
  }
  handleNameChange = (e) => {
    this.setState({ username: e.target.value })
  }


  render() {
    /* TODO: create a simple login form that collects username and and email, and lets parent component know when form has been submitted */
    return (
      <>
        <input onChange={this.handleChange} type="text" placeholder="Joe@gmail.com" />
        <input onChange={this.handleNameChange} type="text" placeholder="Enter your username" />
        <button onClick={this.handleClick}>Log In</button>
      </>
    );
  }
};

export default LoginForm;
