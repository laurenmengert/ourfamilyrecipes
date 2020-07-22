import React from "react";
import { Link } from 'react-router-dom';
import './RecipeCard.css';

function RecipeCard({ recipe, handleDeleteRecipe }) {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">{recipe.title}</h3>
      </div>
      <div className="panel-body">
        <dl>
          <dt>Ingredients</dt>
          <dd>{recipe.ingredients}</dd>
          <dt>Instructions</dt>
          <dd className="Recipe-panel-item">{recipe.instructions}</dd>
        </dl>
        <div className="panel-footer">
        <Link className='btn btn-xs btn-warning' 
        to={{ pathname: '/edit', state: {recipe: recipe} }}>EDIT</Link>
          <button
            className="btn btn-xs btn-danger margin-left-10"
            onClick={() => handleDeleteRecipe(recipe._id)}
            >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
