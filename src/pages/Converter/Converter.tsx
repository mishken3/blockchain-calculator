import React, { FC } from 'react';

import { Content } from './components';
import { useCurrenciesData } from './Converter.request';
import { CurrenciesDataHook } from './Converter.types';

export const ConverterPage: FC = () => {
  const { data, isLoading, isHasError }: CurrenciesDataHook = useCurrenciesData();

  return <Content />;
};
