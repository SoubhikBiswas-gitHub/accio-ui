import rootReducers from './CombindStore';
import {createStore} from 'redux';

const store = createStore (rootReducers)

export default store;
