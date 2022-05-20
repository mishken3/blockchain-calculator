import cn from 'classnames';
import React, { FC } from 'react';

import styles from './CurrencyTabs.module.scss';

interface CurrencyTabsProps {
  title: string;
}

export const CurrencyTabs: FC<CurrencyTabsProps> = ({ title }) => {
  const currencies = [
    {
      name: 'BTC',
      isSelected: true,
    },
    {
      name: 'ETH',
      isSelected: false,
    },
    {
      name: 'USD',
      isSelected: false,
    },
  ];

  return (
    <div className={styles.currencies}>
      <p className={styles.currencies__title}>{title}</p>

      <div className={styles.currencies__wrapper}>
        {currencies.map(({ name, isSelected }) => (
          <div
            key={name}
            className={cn(styles.currencies__item, isSelected && styles.currencies__item_active)}>
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};
