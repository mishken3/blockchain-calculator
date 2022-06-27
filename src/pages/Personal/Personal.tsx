import React, { FC } from 'react';

import { ContentPersonal } from './components';
import { usePersonal } from './usePersonal.hook';

export const PersonalPage: FC = () => {
  const { walletData, currenciesData, isLoading, isHasError, getWalletAmount } = usePersonal();

  if (isLoading) {
    return <h1>Загрузка курсов валют...</h1>;
  }
  if (isHasError || !currenciesData) {
    return <h1>Ошибка загрузки валют: перезагрузите страницу.</h1>;
  }

  const walletAmount = getWalletAmount(currenciesData, walletData);

  return (
    <ContentPersonal
      walletAmount={walletAmount}
      currenciesData={currenciesData}
      walletData={walletData}
    />
  );
};
