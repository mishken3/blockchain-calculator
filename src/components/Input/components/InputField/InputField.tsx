import React, { FC } from 'react';

import styles from './InputField.module.scss';
import { getClearedValue, isMaxLength, isOnlyNumbers } from './InputField.utils';

export interface InputFieldProps {
  value: number;
  editable: boolean;
  textBelowInput?: string;

  onChange?: (value: number) => void;
}

export const InputField: FC<InputFieldProps> = ({
  value,
  editable,
  textBelowInput,
  onChange = null,
}) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (!editable || !onChange) return;

    const clearedValue = getClearedValue(event.target.value);
    const isCorrectNumber = isOnlyNumbers(clearedValue);
    const allowedLength = isMaxLength(clearedValue);

    if (!allowedLength || !isCorrectNumber) return;

    onChange(Number(clearedValue));
  };

  const inputValue = value.toLocaleString('ru-RU');

  return (
    <div className={styles.input}>
      <input
        type="text"
        value={inputValue}
        className={styles.input__field}
        onChange={handleOnChange}
      />

      <span className={styles.input__course}>{textBelowInput}</span>
    </div>
  );
};
