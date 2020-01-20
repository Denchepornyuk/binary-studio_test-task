import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import RecipeCard from '../RecipeCard/RecipeCard';

const RecipesList = ({ recipesData, error, isLoading, loadRecipes }) => {
  useEffect(() => loadRecipes(), []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div className="recipes-list">
      {recipesData.map(recipe => (
        <RecipeCard recipe={recipe} />
      ))}
    </div>
  );
};

RecipesList.propTypes = {
  recipesData: PropTypes.arrayOf(PropTypes.shape({})),
  loadRecipes: PropTypes.func.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};

RecipesList.defaultProps = {
  recipesData: [],
  error: null,
  isLoading: false,
};

export default RecipesList;
