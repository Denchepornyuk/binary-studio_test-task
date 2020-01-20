import { connect } from 'react-redux';
import { loadRecipes } from '../../store/actions';
import { selectRecipes,
  selectRecipesListError,
  selectIsLoading } from '../../store/selectors';
import RecipesList from './RecipesList';

const mapStateToProps = state => ({
  recipesData: selectRecipes(state),
  error: selectRecipesListError(state),
  isLoading: selectIsLoading(state),
});

export default connect(mapStateToProps, { loadRecipes })(RecipesList);
