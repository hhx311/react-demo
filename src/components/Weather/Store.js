/**
 * Created by Jason
 */
import {createStore, applyMiddleware} from 'redux';
import {reducer as weatherReducer} from './Weather/index';
// import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from './redux-promise-middleware';

const configureStore = applyMiddleware(promiseMiddleware)(createStore);

export default configureStore(weatherReducer);

