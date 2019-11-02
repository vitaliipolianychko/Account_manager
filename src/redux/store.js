import { reducer as formReducer } from 'redux-form';
import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import Users from './reducer';

const rootReducer = combineReducers({
	Users,
	form: formReducer,
});

const store = createStore(rootReducer, devToolsEnhancer());
export default store;
