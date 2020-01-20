const API_URL = './api/recipes.json';

export const getRecipesFromServer = () => (
  fetch(API_URL).then(response => response.json())
);
