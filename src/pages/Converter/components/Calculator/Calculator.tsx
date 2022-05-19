import React from 'react';
import styles from './Calculator.module.css';
import cn from 'classnames';

export const Calculator = () => {
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
    <div className={styles.wrapper}>
      <div className={styles.currencies}>
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

      <div className={styles.amount}>
        <input className={styles.amount__input} type="text" />
      </div>
    </div>
  );
};
