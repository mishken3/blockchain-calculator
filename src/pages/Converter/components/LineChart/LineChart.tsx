import 'chart.js/auto';

import React from 'react';
import { Line } from 'react-chartjs-2';

import { CurrenciesEnum } from '../../../../types/types';
import styles from './LineChart.module.scss';

export const LineChart = () => {
  const labels = [
    '7:00',
    '8:00',
    '9:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '18:00',
    '18:00',
    '19:00',
  ];

  /* TODO
  useEffect -> selectedTab = shown coin on graphic
  or
  add menu: Select coin
  */

  const data = {
    labels,
    datasets: [
      {
        label: CurrenciesEnum.BTC,
        data: [300, 100, 400, -200, -200, -200, -200, -200, -200, -200, -200, -200, 300, 400, 100],
        borderColor: '#BF9F86',
        backgroundColor: '#BF9F86',
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
