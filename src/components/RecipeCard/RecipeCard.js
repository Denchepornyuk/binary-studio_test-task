import React from 'react';
import PropTypes from 'prop-types';

const RecipeCard = ({ recipe }) => (
  <div className="recipe">
    <img
      className="recipe__image"
      src={recipe.imageURL}
      alt={recipe.name}
    />

    <p className="recipe__date">
      {recipe.date}
    </p>

    <h2 className="recipe__title">
      {recipe.name}
    </h2>

    <div className="recipe__ingredients">
      <h3 className="ingredients__title">
        Ingredients
      </h3>
      <div className="ingredients__list">
        {recipe.ingredients.map(item => (
          <p>{item}</p>
        ))}
      </div>
    </div>

    <div className="recipe__directions">
      <h3 className="directions__title">
        Directions
      </h3>
      <div>
        {recipe.steps}
      </div>
    </div>

  </div>
);

RecipeCard.propTypes = { recipe: PropTypes.objectOf.isRequired };

export default RecipeCard;
