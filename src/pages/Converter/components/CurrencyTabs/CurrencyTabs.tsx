import cn from 'classnames';
import React, { FC } from 'react';

// import { currencies } from '../../../../data/currencies';
import { CurrenciesEnum } from '../../Calculator.types';
import styles from './CurrencyTabs.module.scss';

interface CurrencyTabsProps {
  title: string;
  selectedCurrency: string;
  handleOnClick: (value: CurrenciesEnum) => void;
}

export const CurrencyTabs: FC<CurrencyTabsProps> = ({ title, selectedCurrency, handleOnClick }) => {
  /* * TODO:
  // selectedCurrency === currencies.name
  const currenciesName = currencies.map((currency) => currency.name); // ['BTC', 'ETH', 'USD']
   * 1. Сравнивать значения в state
   * 2. Обновлять значение isSelected
   * 3. На основе isSelected из массива currencies делать ререндер
   * */

  const currencies = [CurrenciesEnum.BTC, CurrenciesEnum.ETH, CurrenciesEnum.USD];
  return (
    <div className={styles.currencies}>
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
