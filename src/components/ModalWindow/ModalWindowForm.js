import React from 'react';
import PropTypes from 'prop-types';

const ModalWindowForm = ({ close, handleAdd, handleSubmit }) => (
  <form
    className="form"
    onSubmit={handleSubmit}
  >
    <label htmlFor="form__title">
      Name
    </label>
    <input
      type="text"
      name="title"
      id="recipe__title"
      required
      onChange={e => handleAdd(e)}
    />

    <label htmlFor="form__ingredients">
      Ingredients
    </label>
    <p className="form__tips">use ; after ingredient</p>
    <textarea
      name="ingredients"
      id="recipe__ingredients"
      cols="30"
      rows="10"
      required
      onChange={e => handleAdd(e)}
    />

    <label htmlFor="form__directions">
      Directions
    </label>
    <textarea
      name="directions"
      id="recipe__directions"
      cols="30"
      rows="10"
      required
      onChange={e => handleAdd(e)}
    />

    <label htmlFor="from__img">
      Image Link
    </label>
    <input
      type="text"
      name="image"
      id="recipe_img"
      onChange={e => handleAdd(e)}
    />

    <button
      type="button"
      className="form__close"
      onClick={() => close(false)}
    >
      x
    </button>

    <input
      type="submit"
      value="Add"
      className="recipe__button"
    />
  </form>
);

ModalWindowForm.propTypes = {
  close: PropTypes.func.isRequired,
  handleAdd: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default ModalWindowForm;
