import React, { FC } from 'react';

import { Content } from './components';
import { useCurrenciesData } from './Converter.request';

export const ConverterPage: FC = () => {
  const { currenciesData, isLoading, isHasError } = useCurrenciesData();

  if (isLoading) return <h1>Загрузка</h1>;
  if (isHasError || !currenciesData) return <h1>Ашыбка</h1>;

  return <Content currenciesData={currenciesData} />;
};
