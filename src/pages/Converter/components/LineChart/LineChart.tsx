import 'chart.js/auto';

import React, { FC } from 'react';
import { Line } from 'react-chartjs-2';

import { useExchangesHistoryData, useTypedSelector, useWindowDimensions } from '../../../../hooks';
import { CoinsColors, CurrenciesEnum, ExchangesHistoryDataHook } from '../../../../types';
import styles from './LineChart.module.scss';

export const LineChart: FC = () => {
  const currentSelectedInputCurrencyTab = useTypedSelector((store) => store.input.inputTab);
  const currentSelectedOutputCurrencyTab = useTypedSelector((store) => store.input.outputTab);
  const { width: windowWidth } = useWindowDimensions();

  const { exchangesData, isLoading, isHasError }: ExchangesHistoryDataHook =
    useExchangesHistoryData(currentSelectedInputCurrencyTab, currentSelectedOutputCurrencyTab);

  if (isLoading) {
    return <h1>Загрузка курсов валют...</h1>;
  }
  if (isHasError || !exchangesData?.data) {
    return <h1>Ошибка загрузки валют: перезагрузите страницу.</h1>;
  }

  const datesForMonthLabels = exchangesData.data.map((dayData) => {
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
  const datesForWeekLabels = [...datesForMonthLabels].splice(datesForMonthLabels.length - 10);

  const monthHistoryDayPrice = exchangesData.data.map((dayData) => dayData.rate_open);
  const weekHistoryDayPrice = [...monthHistoryDayPrice].splice(monthHistoryDayPrice.length - 10);

  const data = {
    labels: windowWidth >= 768 ? datesForMonthLabels : datesForWeekLabels,
    datasets: [
      {
        label: CurrenciesEnum[currentSelectedInputCurrencyTab],
        data: windowWidth >= 768 ? monthHistoryDayPrice : weekHistoryDayPrice,
        borderColor: CoinsColors[currentSelectedInputCurrencyTab],
        backgroundColor: CoinsColors[currentSelectedInputCurrencyTab],
      },
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
