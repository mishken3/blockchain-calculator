import { Wallet } from '../../redux/reducers/wallet/types';
import { CurrenciesData } from '../../types/CurrenciesData.types';

export const getBeautifyAmount = (num: number, numbersAfterComma = 2) => {
  return Number(num.toFixed(numbersAfterComma)).toLocaleString('ru-RU');
};

export const getWalletAmount = (currenciesData: CurrenciesData, walletData: Wallet): string => {
  const walletAmount = Object.values(currenciesData).reduce((amount: number, currency) => {
    const coinAmount = currency.price * walletData[currency.name];
    amount += coinAmount;

    return amount;
  }, 0);

  return getBeautifyAmount(walletAmount);
};
