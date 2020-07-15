import React, { Component } from "react";
import "./App.css";
import { Route, Switch, NavLink, Redirect } from "react-router-dom";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";

class App extends Component {
  
  handleLogout = () => {
    userService.logout();
    this.setState({
      user: null
    }, () => this.props.history.push('/'));
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Welcome To Our Family Recipes!
          <nav>
            <>
            <NavLink exact to="/signup">
              SIGNUP
            </NavLink>
            &nbsp;&nbsp;&nbsp;
            <NavLink exact to="/login">
              LOGIN
            </NavLink>
            &nbsp;&nbsp;&nbsp;
            </>
          </nav>
        </header>
        <main>
          <Switch>
          <Route exact path='/signup' render={({ history }) =>
              <SignupPage history={history} handleSignupOrLogin={this.handleSignupOrLogin} />
            } />
            <Route exact path='/login' render={({ history }) =>
              <LoginPage history={history} handleSignupOrLogin={this.handleSignupOrLogin} />
            } />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
