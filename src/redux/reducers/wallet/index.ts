import { CurrenciesEnum } from '../../../types/types';
import { WALLET_ACTION_TYPES } from './action-types';
import { Wallet, WalletAction } from './types';

const initialState: Wallet = {
  [CurrenciesEnum.BTC]: 0.0035,
  [CurrenciesEnum.ETH]: 3,
  [CurrenciesEnum.USD]: 20_000,
};

export default (state = initialState, action: WalletAction) => {
  switch (action.type) {
    case WALLET_ACTION_TYPES.UPDATE_WALLET: {
      return {
        ...state,
        updatedValue: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
