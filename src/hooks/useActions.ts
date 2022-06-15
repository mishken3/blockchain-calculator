import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as converterActions from './../redux/reducers/converter/action-creactors';

const useActions = () => {
  const dispatch = useDispatch();

  const allActions = {
    ...converterActions,
  };

  return bindActionCreators(allActions, dispatch);
};

export default useActions;
