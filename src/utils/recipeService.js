import tokenService from './tokenService';

const BASE_URL = '/api/recipes';


function getAllRecipes() {
    console.log(tokenService.getTokenFromLocalStorage(), 'HIOHFIEOHIFOHEI')
  return fetch(BASE_URL, {
      headers: {
        'Authorization': `Bearer ${tokenService.getTokenFromLocalStorage()}`
      }
  })
  .then(allRecipes => allRecipes.json());
}

function createRecipe(recipe) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${tokenService.getTokenFromLocalStorage()}`
        },
        body: JSON.stringify(recipe)
    }).then(newRecipe => newRecipe.json());
}


function deleteRecipe(recipe) {
    return fetch(`${BASE_URL}/${recipe}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${tokenService.getTokenFromLocalStorage()}`
        }
    }).then(deletedRecipe => deletedRecipe.json());
}

function updateRecipe(recipe) {
    return fetch(`${BASE_URL}/${recipe._id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${tokenService.getTokenFromLocalStorage()}`
        },
        body: JSON.stringify(recipe)
    }).then(updatedRecipe => updatedRecipe.json());
}

export default {
    getAllRecipes,
    createRecipe,
    deleteRecipe,
    updateRecipe
}