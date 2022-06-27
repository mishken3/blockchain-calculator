import React, { FC } from 'react';

import { Input, ReverseTabsButton, useInput } from '../../../../components';
import { CurrenciesData } from '../../../../types/CurrenciesData.types';
import styles from './InputExchange.module.scss';

interface InputExchangeProps {
  currenciesData: CurrenciesData;
}

export const InputExchange: FC<InputExchangeProps> = ({ currenciesData }) => {
  const {
    exchangeInputCourse,
    exchangeConversionInputCourse,

    converterData,

    selectInputTab,
    selectOutputTab,
    reverseTabs,
    changeInput,
  } = useInput(currenciesData);

  return (
    <div className={styles.exchange}>
      <Input
        title="Хочу продать"
        handleOnClick={selectInputTab}
        selectedCurrency={converterData.inputTab}
        editable
        value={converterData.input}
        onChange={changeInput}
        exchangeCourse={exchangeInputCourse}
      />

      <ReverseTabsButton reverseTabs={reverseTabs} />

      <Input
        title="Хочу приобрести"
        handleOnClick={selectOutputTab}
        selectedCurrency={converterData.outputTab}
        editable={false}
        value={converterData.output}
        exchangeCourse={exchangeConversionInputCourse}
      />
      <button className={styles.exchange__button}>Stonks</button>
    </div>
  );
};
