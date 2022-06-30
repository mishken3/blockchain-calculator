import React, { FC } from 'react';

import { useCurrenciesData } from '../../hooks';
import { CurrenciesDataHook } from '../../types/CurrenciesData.types';
import { ContentConverter } from './components';

export const ConverterPage: FC = () => {
  const { currenciesData, isLoading, isHasError }: CurrenciesDataHook = useCurrenciesData();

  if (isLoading) {
    return <h1>Загрузка курсов валют...</h1>;
  }
  if (isHasError || !currenciesData) {
    return <h1>Ошибка загрузки валют: перезагрузите страницу.</h1>;
  }

  return <ContentConverter currenciesData={currenciesData} />;
};
