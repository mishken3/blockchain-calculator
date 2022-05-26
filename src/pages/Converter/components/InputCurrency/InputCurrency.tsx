import React, { FC } from 'react';

import styles from './InputCurrency.module.scss';

interface InputCurrencyProps {
  value: number;
  editable: boolean;
  exchangeCourse: string;

  onChange?: (value: number) => void;
}

export const InputCurrency: FC<InputCurrencyProps> = ({
  value,
  editable,
  exchangeCourse,
  onChange = null,
}) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (!editable || !onChange) return;
    const updatedValue = Number(event.target.value);

    onChange(updatedValue);
  };

  return (
    <div className={styles.input}>
      <input
        type="number"
        value={value}
        className={styles.input__input}
        onChange={handleOnChange}
      />
      <span className={styles.input__course}>{exchangeCourse}</span>
    </div>
  );
};
