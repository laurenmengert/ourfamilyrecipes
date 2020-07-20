import React, { Component } from "react";
import "./App.css";
import { Route, Switch, NavLink, Redirect } from "react-router-dom";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import RecipeListPage from "../RecipeListPage/RecipeListPage";
import AddRecipePage from "../AddRecipePage/AddRecipePage";
import EditRecipePage from "../EditRecipePage/EditRecipePage";



class App extends Component {
  state = {
    recipes: [],
    user: userService.getUser(),
  };

  handleAddRecipe = (newRecipe) => {
    newRecipe._id = this.state.recipes.length + 1;
    this.setState(
      {
        recipes: [...this.state.recipes, newRecipe],
      },
      () => this.props.history.push("/")
    );
  };

  handleDeleteRecipe = (recipeToDelete) => {
    this.setState(
      (state) => ({
        recipes: state.recipes.filter(
          (recipe) => recipe._id !== recipeToDelete
        ),
      }),
      () => this.props.history.push("/")
    );
  };

  handleUpdateRecipe = (recipeToUpdate) => {
    const updatedRecipes = this.state.recipes.map((recipe) => {
      if (recipe._id === recipeToUpdate._id) {
        recipe = recipeToUpdate;
      }
      return recipe;
    });
    this.setState(
      {
        recipes: updatedRecipes,
      },
      () => this.props.history.push("/")
    );
  };

  handleLogout = () => {
    userService.logout();
    this.setState(
      {
        user: null,
      },
      () => this.props.history.push("/")
    );
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          OUR FAMILY RECIPES
          <nav>
            {userService.getUser() ? (
              <>
                {userService.getUser().name
                  ? `WELCOME, ${userService.getUser().name.toUpperCase()}`
                  : ""}
                &nbsp;&nbsp;&nbsp;
                <NavLink exact to="/">
                  RECIPE LIST
                </NavLink>
                &nbsp;&nbsp;&nbsp;
                <NavLink exact to="/add">
                  ADD RECIPE
                </NavLink>
                &nbsp;&nbsp;&nbsp;
                <NavLink exact to="/logout" onClick={this.handleLogout}>
                  LOGOUT
                </NavLink>
              </>
            ) : (
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
            )}
          </nav>
        </header>
        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={({ history }) => (
                <RecipeListPage
                  recipes={this.state.recipes}
                  handleDeleteRecipe={this.handleDeleteRecipe}
                />
              )}
            />
            <Route
              exact
              path="/add"
              render={() => (
                <AddRecipePage handleAddRecipe={this.handleAddRecipe} />
              )}
            />
            <Route
              exact
              path="/edit"
              render={({ history, location }) => (
                <EditRecipePage
                  handleUpdateRecipe={this.handleUpdateRecipe}
                  location={location}
                />
              )}
            />
            <Route
              exact
              path="/signup"
              render={({ history }) => (
                <SignupPage
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              )}
            />
            <Route
              exact
              path="/login"
              render={({ history }) => (
                <LoginPage
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              )}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
