import {createStore} from 'redux';
import rootReducer from './src/reducer/index';

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
