import 'chart.js/auto';

import React from 'react';
import { Line } from 'react-chartjs-2';

import { useExchangesHistoryData, useTypedSelector } from '../../../../hooks';
import { ExchangesHistoryDataHook } from '../../../../types/ChartsData.types';
import { CoinsColors, CurrenciesEnum } from '../../../../types/types';
import styles from './LineChart.module.scss';

export const LineChart = () => {
  const currentSelectedInputCurrencyTab = useTypedSelector((store) => store.input.inputTab);
  const currentSelectedOutputCurrencyTab = useTypedSelector((store) => store.input.outputTab);

  const { exchangesData, isLoading, isHasError }: ExchangesHistoryDataHook =
    useExchangesHistoryData();

  if (isLoading) {
    return <h1>Загрузка курсов валют...</h1>;
  }
  if (isHasError || !exchangesData?.data) {
    return <h1>Ошибка загрузки валют: перезагрузите страницу.</h1>;
  }

  console.log('exchangesData :>> ', exchangesData);

  const datesForLabels = exchangesData.data.map((dayData) => {
    const months = [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ];

    const day = new Date(dayData.time_open).getDate();

    const month = months[new Date(dayData.time_open).getMonth()];

    return `${day} ${month}`;
  });

  const dayPrice = exchangesData.data.map((dayData) => dayData.rate_open);

  /* TODO
  useEffect -> selectedTab = shown coin on graphic
  or
  add menu: Select coin
  */

  const data = {
    labels: datesForLabels,
    datasets: [
      {
        label: CurrenciesEnum[currentSelectedInputCurrencyTab],
        data: dayPrice,
        borderColor: CoinsColors[currentSelectedInputCurrencyTab],
        backgroundColor: CoinsColors[currentSelectedInputCurrencyTab],
      },
      /*
      {
        label: CurrenciesEnum[currentSelectedOutputCurrencyTab],
        data: dayPrice,
        borderColor: CoinsColors[currentSelectedOutputCurrencyTab],
        backgroundColor: CoinsColors[currentSelectedOutputCurrencyTab],
      },
     */
    ],
  };

  return (
    <div className={styles.chart}>
      <div className={styles.chart__content}>
        <Line data={data} width={600} />
      </div>
    </div>
  );
};
