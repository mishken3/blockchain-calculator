import React, { FC } from 'react';

import styles from './InputCurrency.module.scss';
import { getClearedValue, isMaxLength, isOnlyNumbers } from './InputCurrency.utils';

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

    const clearedValue = getClearedValue(event.target.value);
    const isCorrectNumber = isOnlyNumbers(clearedValue);
    const allowedLength = isMaxLength(clearedValue);

    if (!allowedLength) return;
    if (!isCorrectNumber) return;

    onChange(Number(clearedValue));
  };

  const inputValue = value.toLocaleString('ru-RU');

  return (
    <div className={styles.input}>
      <input
        type="text"
        value={inputValue}
        className={styles.input__input}
        onChange={handleOnChange}
      />
      <span className={styles.input__course}>{exchangeCourse}</span>
    </div>
  );
};
