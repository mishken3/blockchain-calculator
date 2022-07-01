import React, { FC } from 'react';

import { InputField, useInput } from '../../../../components';
import { CurrenciesData } from '../../../../types/CurrenciesData.types';
import { useInputUSD } from './InputUSD.hook';
import styles from './InputUSD.module.scss';

interface InputUSDProps {
  currenciesData: CurrenciesData;
}

export const InputUSD: FC<InputUSDProps> = ({ currenciesData }) => {
  const { inputData, changeInput } = useInput(currenciesData);
  const { increaseWalletUSD } = useInputUSD(inputData);
  const textBelow = `Внести на счёт ${inputData.input}$ ?`;

  return (
    <div className={styles.input}>
      <InputField
        editable={true}
        value={inputData.input}
        onChange={changeInput}
        exchangeCourse={textBelow}
      />

      <button className={styles.input__button} onClick={increaseWalletUSD}>
        Buy
      </button>
    </div>
  );
};
