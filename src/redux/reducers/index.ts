import { combineReducers } from 'redux';

import converterReducer from './converter';
import walletReducer from './wallet';

const rootReducer = combineReducers({
  converter: converterReducer,
  wallet: walletReducer,
});

export default rootReducer;
