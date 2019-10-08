import { reducer as formReducer } from 'redux-form';
import { combineReducers , createStore, applyMiddleware } from 'redux';

import reducerData from './reducer';

const rootReducer = combineReducers({
  reducerData, 
  form: formReducer,
});


function logger({ getState }) {
  return next => action => {
    const returnValue = next(action);
    const serialObj = JSON.stringify(getState().reducerData);
    localStorage.setItem('key', serialObj);
    const serialObjForm = JSON.stringify(getState().form);
    localStorage.setItem('form', serialObjForm);

    return returnValue;
  };
}

// eslint-disable-next-line no-underscore-dangle
const store = createStore(rootReducer, applyMiddleware(logger));
export default store;