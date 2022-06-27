import React, { FC } from 'react';

import { CurrencyTabs, InputField } from './components';
import styles from './Input.module.scss';
import { InputPropsT } from './Input.types';

export const Input: FC<InputPropsT> = ({
  title,
  handleOnClick,
  selectedCurrency,

  editable,
  value,
  onChange,
  exchangeCourse,
}) => {
  return (
    <div className={styles.inputItem}>
      <CurrencyTabs
        title={title}
        handleOnClick={handleOnClick}
        selectedCurrency={selectedCurrency}
      />

      <InputField
        editable={editable}
        value={value}
        onChange={onChange}
        exchangeCourse={exchangeCourse}
      />
    </div>
  );
};
