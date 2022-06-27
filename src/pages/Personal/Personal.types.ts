import { CurrenciesData } from '../../types/CurrenciesData.types';
import { Wallet } from './../../redux/reducers/wallet/types';

export interface UsePersonalHook {
  walletData: Wallet;
  currenciesData: CurrenciesData | null;
  isLoading: boolean;
  isHasError: boolean;
  getWalletAmount: (currenciesData: CurrenciesData, walletData: Wallet) => string;
}
