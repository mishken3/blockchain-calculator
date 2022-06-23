import React, { FC } from 'react';

import { useCurrenciesData, useTypedSelector } from '../../hooks';
import { CoinItem, ContentPersonal } from './components';
import { getBeautifyAmount } from './Personal.utils';

export const PersonalPage: FC = () => {
  const walletData = useTypedSelector((state) => state.wallet);
  const { currenciesData, isLoading, isHasError } = useCurrenciesData();

  if (isLoading) {
    return <h1>Загрузка курсов валют...</h1>;
  }
  if (isHasError || !currenciesData) {
    return <h1>Ошибка загрузки валют: перезагрузите страницу.</h1>;
  }

  const currencyAmounts = Object.values(currenciesData).map((currency) => {
    const coinAmount = walletData[currency.name];
    const coinAmountUSD = currency.price * walletData[currency.name];
    const beautifyCoinAmount = getBeautifyAmount(coinAmountUSD);
    return (
      <CoinItem
        key={currency.id}
        coinName={currency.name}
        coinAmount={coinAmount}
        coinAmountUSD={beautifyCoinAmount}
      />
    );
  });

  const getWalletAmount = () => {
    const walletAmount = Object.values(currenciesData).reduce((amount: number, currency) => {
      const coinAmount = currency.price * walletData[currency.name];
      amount += coinAmount;

      return amount;
    }, 0);

    return getBeautifyAmount(walletAmount);
  };

  const walletAmount = getWalletAmount();

  return <ContentPersonal walletAmount={walletAmount} currencyAmounts={currencyAmounts} />;
};
