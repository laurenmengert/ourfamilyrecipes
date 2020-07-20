import React from 'react';
import './RecipeListPage.css';
import RecipeCard from '../../components/RecipeCard/RecipeCard';

function RecipeListPage({ recipes, handleDeleteRecipe }) {
  return (
    <>
      <h1>My Recipes</h1>
      <div className='RecipeListPage-grid'>
        {recipes.map(recipe =>
            <RecipeCard
                key={recipe._id}
                recipe={recipe}
                handleDeleteRecipe={handleDeleteRecipe}
            />
        )}
      </div>
    </>
  );
}

export default RecipeListPage;