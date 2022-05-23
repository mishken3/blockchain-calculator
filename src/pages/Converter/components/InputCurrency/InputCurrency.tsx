import React, { FC } from 'react';

import styles from './InputCurrency.module.scss';

interface InputCurrencyProps {
  value: number;
  onChange: (value: number) => void;
  editable: boolean;
  exchangeCourse: string;
}

export const InputCurrency: FC<InputCurrencyProps> = ({
  value,
  editable,
  exchangeCourse,
  onChange,
}) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (!editable) return;
    const updatedValue = Number(event.target.value);

    onChange(updatedValue);
  };

  return (
    <div className={styles.wrapper}>
      <input type="number" value={value} className={styles.input} onChange={handleOnChange} />
      <span className={styles.course}>{exchangeCourse}</span>
    </div>
  );
};
