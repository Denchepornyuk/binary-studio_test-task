import React, { useState } from 'react';
import ModalWindow from '../ModalWindow/index';

const AddNewRecipe = () => {
  const [showWindow, setShowWindow] = useState(false);

  return (
    !showWindow
      ? (
        <button
          type="button"
          className="recipe__button"
          onClick={() => setShowWindow(true)}
        >
          Add Recipe
        </button>
      )
      : <ModalWindow closeWindow={setShowWindow} />
  );
};

export default AddNewRecipe;
