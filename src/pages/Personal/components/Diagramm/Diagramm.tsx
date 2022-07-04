import 'chart.js/auto';

import React, { FC } from 'react';
import { Doughnut } from 'react-chartjs-2';

import { Wallet } from '../../../../redux/reducers/wallet/types';
import { CoinsColors, CurrenciesEnum } from '../../../../types/types';
import styles from './Diagramm.module.scss';

interface DiagrammProps {
  walletAmount: string;
  walletData: Wallet;
  walletData2USD: string;
}

export const Diagramm: FC<DiagrammProps> = ({ walletAmount, walletData, walletData2USD }) => {
  /* TODO set all to normal obj walletData2USD */

  const data = {
    labels: [CurrenciesEnum.BTC, CurrenciesEnum.ETH, CurrenciesEnum.USD],
    datasets: [
      {
        label: 'Balance amount',
        /* TODO Replace  hardcode walletData2USD */
        data: [39_486.87, 55_546.16, 200_000],
        backgroundColor: [CoinsColors.BTC, CoinsColors.ETH, CoinsColors.USD],
        borderColor: [CoinsColors.BTC, CoinsColors.ETH, CoinsColors.USD],
        borderWidth: 1,
        hoverOffset: 3,
      },
    ],
  };

  return (
    <div className={styles.diagramm}>
      <Doughnut data={data} />
    </div>
  );
};
