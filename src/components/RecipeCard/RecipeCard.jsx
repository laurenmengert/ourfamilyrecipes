import React from 'react';

function RecipeCard({ recipe }) {
    return (
        <div className='panel panel-default'>
            <div className="panel-heading">
                <h3 className='panel-title'>{recipe.title}</h3>
            </div>
            <div className='panel-body'>
                <dl>
                    <dt>Ingredients</dt>
                    <dd>{recipe.ingredients}</dd>
                    <dt>Instructions</dt>
                    <dd>{recipe.instructions}</dd>
                </dl>
            </div>
        </div>
    )
}

export default RecipeCard;