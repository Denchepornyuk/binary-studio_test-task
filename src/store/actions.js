import { getRecipesFromServer } from '../api/api_recipes';

export const ACTIONS_TYPES = {
  SAVE_RECIPES: 'SAVE_RECIPES',
  SET_RECIPES_ERROR: 'SET_RECIPES_ERROR',
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING',
};

const getRecipes = recipes => ({
  type: ACTIONS_TYPES.SAVE_RECIPES,
  recipes,
});

const setRecipesError = error => ({
  type: ACTIONS_TYPES.SET_RECIPES_ERROR,
  error,
});

const startLoading = () => ({
  type: ACTIONS_TYPES.START_LOADING,
});

const stopLoading = () => ({
  type: ACTIONS_TYPES.STOP_LOADING,
});

export const loadRecipes = () => (dispatch) => {
  dispatch(startLoading());

  getRecipesFromServer()
    .then(({ data }) => dispatch(getRecipes(data)))
    .catch(error => dispatch(setRecipesError(error.message)))
    .finally(() => dispatch(stopLoading()));
};
