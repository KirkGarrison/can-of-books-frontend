import { Component } from "react";

class Profile extends Component {

  render() {
    /* TODO: render information about logged in user */
    /* STRETCH TODO: if no logged in user then redirect home */
    return (
      <div>
        <p>Username: {this.props.username}</p>
        <p>Email: {this.props.user}</p>
      </div>
    )
  }
};

export default Profile;
