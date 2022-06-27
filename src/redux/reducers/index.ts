import { combineReducers } from 'redux';

import inputReducer from './input';
import walletReducer from './wallet';

const rootReducer = combineReducers({
  input: inputReducer,
  wallet: walletReducer,
});

export default rootReducer;
