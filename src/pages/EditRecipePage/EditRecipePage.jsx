import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./EditRecipePage.css";

class EditRecipePage extends Component {
  state = {
    formData: this.props.location.state.recipe,
  };

  handleChange = (e) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleUpdateRecipe(this.state.formData);
  };

  render() {
    return (
      <>
        <h1 className="EditRecipePage-header">Edit Recipe</h1>
        <form className="EditRecipePage-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Recipe Title</label>
            <input
              className="form-control"
              name="title"
              value={this.state.formData.title}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Ingredients</label>
            <input
              className="form-control"
              name="ingredients"
              value={this.state.formData.ingredients}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Instructions</label>
            <textarea
              cols="30"
              rows="10"
              className="form-control"
              name="instructions"
              value={this.state.formData.instructions}
              onChange={this.handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-xs">
            SAVE RECIPE
          </button>
          &nbsp;&nbsp;
          <Link className="EditRecipePage-cancel" to="/">
            CANCEL
          </Link>
        </form>
      </>
    );
  }
}

export default EditRecipePage;
