import React, { FC } from 'react';
import { Doughnut } from 'react-chartjs-2';

import { Wallet } from '../../../../redux/reducers/wallet/types';
import { CoinsColors, CurrenciesEnum } from '../../../../types';
import styles from './Diagramm.module.scss';

interface DiagrammProps {
  walletData2USD: Wallet;
}

export const Diagramm: FC<DiagrammProps> = ({ walletData2USD }) => {
  /* TODO use walletAmount in the center, mb in react-chartjs-2 its impossible */

  const walletCurrencies = Object.keys(walletData2USD) as Array<keyof typeof CurrenciesEnum>;

  const chartData = {
    labels: walletCurrencies,
    datasets: [
      {
        label: 'Balance amount chart',
        data: walletCurrencies.map((key) => walletData2USD[key]),
        backgroundColor: walletCurrencies.map((currency) => CoinsColors[currency]),
        borderColor: walletCurrencies.map((currency) => CoinsColors[currency]),
        borderWidth: 1,
        hoverOffset: 3,
        cutout: '75%',
      },
    ],
  };

  return (
    <div className={styles.diagramm}>
      <Doughnut data={chartData} />
    </div>
  );
};
