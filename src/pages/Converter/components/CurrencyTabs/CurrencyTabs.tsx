import cn from 'classnames';
import React, { FC } from 'react';

import { currencies } from '../../../../data/currencies';
import styles from './CurrencyTabs.module.scss';

interface CurrencyTabsProps {
  title: string;
  selectedCurrency: string;
  handleOnClick: (value: string) => void;
}

export const CurrencyTabs: FC<CurrencyTabsProps> = ({ title, selectedCurrency, handleOnClick }) => {
  /* * TODO:
  // selectedCurrency === currencies.name
  const currenciesName = currencies.map((currency) => currency.name); // ['BTC', 'ETH', 'USD']
   * 1. Сравнивать значения в state
   * 2. Обновлять значение isSelected
   * 3. На основе isSelected из массива currencies делать ререндер
   * */

  return (
    <div className={styles.currencies}>
      <p className={styles.currencies__title}>{title}</p>

      <div className={styles.currencies__wrapper}>
        {currencies.map(({ name, isSelected }) => {
          const checkIsSelected = name === selectedCurrency;

          return (
            <button
              type="button"
              onClick={() => handleOnClick(name)}
              key={name}
              className={cn(
                styles.currencies__item,
                checkIsSelected && styles.currencies__item_active,
              )}>
              {name}
            </button>
          );
        })}
      </div>
    </div>
  );
};
