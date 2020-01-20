import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ModalWindowForm from './ModalWindowForm';

const ModalWindow = ({ closeWindow, addRecipe }) => {
  const [newRecipe, setNewRecipe] = useState({});

  const handleAddRecipe = ({ target }) => {
    switch (target.name) {
      case 'title':
        return setNewRecipe({
          ...newRecipe,
          name: target.value,
        });
      case 'ingredients':
        return setNewRecipe({
          ...newRecipe,
          ingredients: target.value.split(';'),
        });
      case 'directions':
        return setNewRecipe({
          ...newRecipe,
          steps: target.value,
        });
      case 'image':
        return setNewRecipe({
          ...newRecipe,
          imageURL: target.value,
        });
      default:
        return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date();

    addRecipe({
      ...newRecipe,
      date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
    });

    closeWindow(false);
  };

  return (
    <div className="modal-window__wrapper">
      <ModalWindowForm
        close={closeWindow}
        handleAdd={handleAddRecipe}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

ModalWindow.propTypes = {
  closeWindow: PropTypes.func.isRequired,
  addRecipe: PropTypes.func.isRequired,
};

export default ModalWindow;
