import { createSelector } from 'reselect';

const rootSelector = state => state;

export const selectRecipes = createSelector(
  rootSelector,
  ({ recipesListData }) => {
    if (!recipesListData) {
      return [];
    }

    return recipesListData;
  }
);

export const selectRecipesListError = createSelector(
  rootSelector,
  ({ error }) => error,
);

export const selectIsLoading = createSelector(
  rootSelector,
  ({ isLoading }) => isLoading,
);
