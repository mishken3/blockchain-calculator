import React, { FC } from 'react';

import { Input, ReverseTabsButton, useInput } from '../../../../components';
import { CurrenciesData } from '../../../../types/CurrenciesData.types';
import styles from './InputExchange.module.scss';
import { useInputExhchage } from './useInputExchange.hook';

interface InputExchangeProps {
  currenciesData: CurrenciesData;
}

export const InputExchange: FC<InputExchangeProps> = ({ currenciesData }) => {
  const {
    exchangeInputCourse,
    exchangeConversionInputCourse,

    inputData,

    selectInputTab,
    selectOutputTab,
    reverseTabs,
    changeInput,
  } = useInput(currenciesData);
  const { exchangeAction } = useInputExhchage(currenciesData);

  const handleExchangeAction = () => {
    exchangeAction(inputData);
  };

  return (
    <div className={styles.exchange}>
      <Input
        title="Хочу продать"
        handleOnClick={selectInputTab}
        selectedCurrency={inputData.inputTab}
        editable
        value={inputData.input}
        onChange={changeInput}
        exchangeCourse={exchangeInputCourse}
      />

      <ReverseTabsButton reverseTabs={reverseTabs} />

      <Input
        title="Хочу приобрести"
        handleOnClick={selectOutputTab}
        selectedCurrency={inputData.outputTab}
        editable={false}
        value={inputData.output}
        exchangeCourse={exchangeConversionInputCourse}
      />
      <button className={styles.exchange__button} onClick={handleExchangeAction}>
        Stonks
      </button>
    </div>
  );
};
