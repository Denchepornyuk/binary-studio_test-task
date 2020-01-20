import { connect } from 'react-redux';
import { addRecipe } from '../../store/actions';

import ModalWindow from './ModalWindow';

export default connect(null, { addRecipe })(ModalWindow);
