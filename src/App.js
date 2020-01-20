import React from 'react';
import './style/index.scss';
import RecipesList from './components/RecipesList/index';
import AddNewRecipe from './components/AddNewRecipe/AddNewRecipe';

const App = () => (
  <section className="recipes-page">
    <h1 className="recipes-page__title">Cookbook</h1>
    <RecipesList />
    <AddNewRecipe />
  </section>
);

export default App;
