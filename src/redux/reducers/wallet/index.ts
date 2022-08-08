import { CurrenciesEnum } from '../../../types';
import { WALLET_ACTION_TYPES } from './action-types';
import { Wallet, WalletAction } from './types';

const initialState: Wallet = {
  [CurrenciesEnum.BTC]: 2,
  [CurrenciesEnum.ETH]: 50,
  [CurrenciesEnum.USD]: 200_000,
};

export default (state = initialState, action: WalletAction) => {
  switch (action.type) {
    case WALLET_ACTION_TYPES.UPDATE_WALLET: {
      return {
        ...action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
