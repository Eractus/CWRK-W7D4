import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';
// import reduxThunk from 'redux-thunk'
import thunk from '../middleware/thunk';

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk, logger));

export default configureStore;
