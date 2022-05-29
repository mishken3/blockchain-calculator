import React, { FC } from 'react';

import { Content } from './components';
import { useCurrenciesData } from './Converter.request';

export const ConverterPage: FC = () => {
  const { currenciesData, isLoading, isHasError } = useCurrenciesData();

  if (isLoading) return <h1>Загрузка</h1>;
  if (isHasError) return <h1>Ашыбка</h1>;

  console.log('currenciesData :>> ', currenciesData);

  console.count();
  return <Content />;
};
