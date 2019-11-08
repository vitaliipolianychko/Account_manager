import { reducer as formReducer } from 'redux-form';
import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import users from './user';

const rootReducer = combineReducers({
	users,
	form: formReducer,
});

const store = createStore(rootReducer, devToolsEnhancer());
export default store;
