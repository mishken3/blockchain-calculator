import { combineReducers } from 'redux';

import converterReducer from './converter';

const rootReducer = combineReducers({
  converter: converterReducer,
});

export default rootReducer;
