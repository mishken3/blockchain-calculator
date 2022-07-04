import 'chart.js/auto';

import React from 'react';
import { Line } from 'react-chartjs-2';

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
    '20:00',
  ];

  const options = {
    responsive: true,
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [
          300, 100, 400, -200, -200, -200, -200, -200, -200, -200, -200, -200, -200, -200, -200,
          -200,
        ],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [10, 150, 800, 600, 650],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div className={styles.chart}>
      <div className={styles.chart__dates}>
        <div className={styles.chart__dates_days}>
          <p>DAY 1</p>
          <p>DAY 2</p>
          <p>DAY 3</p>
          <p>DAY 4</p>
        </div>

        <p>Choose Date</p>
      </div>

      <div className={styles.chart__content}>
        <Line data={data} options={options} width={600} />
      </div>
    </div>
  );
};
