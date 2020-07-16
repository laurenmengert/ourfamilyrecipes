import React from 'react';
import './RecipeListPage.css';
import RecipeCard from '../../components/RecipeCard/RecipeCard';

function RecipeListPage({ recipes }) {
  return (
    <>
      <h1>My Recipes</h1>
      <div className='RecipeListPage-grid'>
        {recipes.map(recipe =>
            <RecipeCard
                key={recipe._id}
                recipe={recipe}
            />
        )}
      </div>
    </>
  );
}

export default RecipeListPage;