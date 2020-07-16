import React, { Component } from 'react';
import './App.css';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import RecipeListPage from '../RecipeListPage/RecipeListPage';
import AddRecipePage from '../AddRecipePage/AddRecipePage';

class App extends Component {
  state = {
    recipes: [
      {
        _id: 1,
        title: 'Chicken Spitz',
        ingredients: 'chicken',
        instructions: 'make the thing'
      },
      {
        _id: 2,
        title: 'Sunday Sauce',
        ingredients: 'sauce',
        instructions: 'sauce it up'
      },
      {
        _id: 3,
        title: 'Nanny\'s Nut Crescents',
        ingredients: 'nuts',
        instructions: 'nutty about these'
      }
    ]
  }

  handleAddRecipe = newRecipe => {
    newRecipe._id = this.state.recipes.length + 1;
    this.setState({
      recipes: [...this.state.recipes, newRecipe]
    })
  };

  handleLogout = () => {
    userService.logout();
    this.setState({
      user: null
    }, () => this.props.history.push('/'));
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          Welcome To Our Family Recipes!
          <nav>
            <>
            <NavLink exact to='/signup'>
              SIGNUP
            </NavLink>
            &nbsp;&nbsp;&nbsp;
            <NavLink exact to='/login'>
              LOGIN
            </NavLink>
            &nbsp;&nbsp;&nbsp;
            </>
          </nav>
        </header>
        <main>
          <AddRecipePage handleAddRecipe={this.handleAddRecipe} />
          <RecipeListPage recipes={this.state.recipes} />
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
