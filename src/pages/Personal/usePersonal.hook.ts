import { useCurrenciesData, useTypedSelector } from '../../hooks';
import { Wallet } from '../../redux/reducers/wallet/types';
import { CurrenciesData } from './../../types/CurrenciesData.types';
import { UsePersonalHook } from './Personal.types';
import { getBeautifyAmount } from './Personal.utils';

export const usePersonal = (): UsePersonalHook => {
  const { currenciesData, isLoading, isHasError } = useCurrenciesData();

  const walletData = useTypedSelector((state) => state.wallet);

  const getWalletAmount = (currenciesData: CurrenciesData, walletData: Wallet): string => {
    const walletAmount = Object.values(currenciesData).reduce((amount: number, currency) => {
      const coinAmount = currency.price * walletData[currency.name];
      amount += coinAmount;

      return amount;
    }, 0);

    return getBeautifyAmount(walletAmount);
  };

  return { walletData, currenciesData, isLoading, isHasError, getWalletAmount };
};
