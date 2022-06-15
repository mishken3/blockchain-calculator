import React, { FC } from 'react';

import { useCurrenciesData } from '../../hooks/useCurrenciesData';
import { Content } from './components';

export const ConverterPage: FC = () => {
  const { currenciesData, isLoading, isHasError } = useCurrenciesData();

  if (isLoading) {
    return <h1>Загрузка курсов валют...</h1>;
  }
  if (isHasError || !currenciesData) {
    return <h1>Ошибка загрузки валют: перезагрузите страницу.</h1>;
  }

  return <Content currenciesData={currenciesData} />;
};
