import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton';
// import Login from './Login';
import Profile from './Profile';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {


  render() {
    return (
      <>
        <Router>
          <Header />
          <LoginButton />
          <Switch>
            {this.props.auth0.isAuthenticated &&
              <>
                <Route exact path="/">
                  <BestBooks />
                </Route>
                <Route exact path="/profile">
                  <Profile />
                </Route>
                <LogoutButton />
              </>
            }
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

// constructor(props) {
//   super(props);
//   this.state = {
//     user: null,
//     username: '',
//   }
// }

// loginHandler = (user, username) => {
//   this.setState({
//     user,
//   })
//   this.setState({
//     username,
//   })
// }

// logoutHandler = () => {
//   this.setState({
//     user: null,
//   })
// }





//   render() {
//     return (
//       <>
//         <Router>
//           <Header user={this.state.user} onLogout={this.logoutHandler} />
//           <Switch>
//             <Route exact path="/">
//               {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
//               {this.state.user ? <BestBooks email={this.state.user} /> : <Login loginHandler={this.loginHandler}/>}
//             </Route>
//             {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
//             <Route exact path="/profile">
//               {this.state.user ? <Profile user={this.state.user} username={this.state.username} /> : <Login loginHandler={this.loginHandler}/>}
//               </Route>
//           </Switch>
//           <Footer />
//         </Router>
//       </>
//     )
//   }
// }

export default withAuth0(App);
