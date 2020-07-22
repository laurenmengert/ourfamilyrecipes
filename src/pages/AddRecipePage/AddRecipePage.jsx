import React, { Component } from "react";
import './AddRecipePage.css'

class AddRecipePage extends Component {
  state = {
    formData: {
      title: "",
      ingredients: "",
      instructions: "",
    }
  };

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
            formData
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddRecipe(this.state.formData);
    };


  render() {
    return (
      <>
        <h1 className="AddRecipePage-form-header">Add Recipe</h1>
        <form className="AddRecipePage-form" onSubmit={this.handleSubmit}>
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
            <label>Ingredients (Comma separated)</label>
            <input
              className="form-control"
              name="ingredients"
              value={this.state.formData.ingredients}
              onChange={this.handleChange}
              required
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
          <button
            type="submit"
            className="btn"
          >
            ADD RECIPE
          </button>
        </form>
      </>
    );
  }
}

export default AddRecipePage;