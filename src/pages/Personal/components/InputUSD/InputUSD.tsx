import React, { FC } from 'react';

import { InputDataHook, InputField } from '../../../../components';
import { getBeautifyAmount } from '../../Personal.utils';
import { useInputUSD } from './InputUSD.hook';
import styles from './InputUSD.module.scss';

interface InputUSDProps {
  useInputData: InputDataHook;
}

export const InputUSD: FC<InputUSDProps> = ({ useInputData }) => {
  const { inputData, changeInput } = useInputData;
  const { increaseWalletUSD } = useInputUSD(inputData);
  const textAfterInputUSD = `Внести на счёт ${getBeautifyAmount(inputData.input)}$ ?`;

  return (
    <div className={styles.input}>
      <InputField
        editable={true}
        value={inputData.input}
        onChange={changeInput}
        textBelowInput={textAfterInputUSD}
      />

      <button className={styles.input__button} onClick={increaseWalletUSD}>
        Купить
      </button>
    </div>
  );
};
