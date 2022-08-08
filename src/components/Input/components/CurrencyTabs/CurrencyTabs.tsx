import cn from 'classnames';
import React, { FC } from 'react';

import { CurrenciesEnum } from '../../../../types';
import styles from './CurrencyTabs.module.scss';

export interface CurrencyTabsProps {
  title: string;
  selectedCurrency: string;
  handleOnClick: (value: CurrenciesEnum) => void;
  isHorizontalView?: boolean;
}

export const CurrencyTabs: FC<CurrencyTabsProps> = ({
  title,
  selectedCurrency,
  handleOnClick,
  isHorizontalView = true,
}) => {
  const currencies = [CurrenciesEnum.USD, CurrenciesEnum.ETH, CurrenciesEnum.BTC];

  return (
    <div className={cn(styles.currencies, !isHorizontalView && styles.vertical)}>
      <p className={styles.currencies__title}>{title}</p>

      <div className={styles.currencies__wrapper}>
        {currencies.map((currency) => {
          const isSelected = currency === selectedCurrency;

          return (
            <button
              type="button"
              onClick={() => handleOnClick(currency)}
              key={currency}
              className={cn(styles.currencies__item, isSelected && styles.currencies__item_active)}>
              {currency}
            </button>
          );
        })}
      </div>
    </div>
  );
};
