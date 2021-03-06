import { WALLET_ACTION_TYPES } from './action-types';
import { UpdatedWalletAction, Wallet } from './types';

export const updateWallet = (updatedValue: Wallet): UpdatedWalletAction => ({
  type: WALLET_ACTION_TYPES.UPDATE_WALLET,
  payload: updatedValue,
});
