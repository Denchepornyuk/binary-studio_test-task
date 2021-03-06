import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ACTIONS_TYPES } from './actions';

const initialState = {
  recipesListData: null,
  isLoading: false,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.SAVE_RECIPES:
      return {
        ...state,
        error: null,
        recipesListData: action.recipes,
      };

    case ACTIONS_TYPES.SET_RECIPES_ERROR:
      return {
        ...state,
        error: action.error,
        recipesListData: null,
      };

    case ACTIONS_TYPES.START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS_TYPES.STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };

    case ACTIONS_TYPES.ADD_NEW_RECIPE:
      return {
        ...state,
        recipesListData: [
          ...state.recipesListData,
          action.recipe,
        ],
      };

    default:
      return state;
  }
};

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
