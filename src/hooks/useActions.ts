import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as converterActions from '../redux/reducers/input/action-creactors';
import * as walletActions from './../redux/reducers/wallet/action-creactors';

export const useActions = () => {
  const dispatch = useDispatch();

  const allActions = {
    ...converterActions,
    ...walletActions,
  };

  return bindActionCreators(allActions, dispatch);
};
