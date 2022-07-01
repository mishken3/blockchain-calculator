import React, { FC } from 'react';

import { useCurrenciesData } from '../../hooks';
import { ContentPersonal } from './components';

export const PersonalPage: FC = () => {
  const { currenciesData, isLoading, isHasError } = useCurrenciesData();

  if (isLoading) {
    return <h1>Загрузка курсов валют...</h1>;
  }
  if (isHasError || !currenciesData) {
    return <h1>Ошибка загрузки валют: перезагрузите страницу.</h1>;
  }

  return <ContentPersonal currenciesData={currenciesData} />;
};
