import { CurrenciesEnum } from '../../../types';
import { WALLET_ACTION_TYPES } from './action-types';

/** state **/
export interface Wallet {
  [CurrenciesEnum.BTC]: number;
  [CurrenciesEnum.DOGE]: number;
  [CurrenciesEnum.USD]: number;
}

/** actions **/
export interface UpdatedWalletAction {
  type: WALLET_ACTION_TYPES.UPDATE_WALLET;
  payload: Wallet;
}

export type WalletAction = UpdatedWalletAction;
