import React, { FC } from 'react';

import { Input, ReverseTabsButton, useInput } from '../../../../components';
import { CurrenciesData } from '../../../../types/CurrenciesData.types';
import styles from './ContentConverter.module.scss';

interface ContentConverterProps {
  currenciesData: CurrenciesData;
}

export const ContentConverter: FC<ContentConverterProps> = ({ currenciesData }) => {
  const {
    exchangeInputCourse,
    exchangeConversionInputCourse,

    inputData,

    selectInputTab,
    selectOutputTab,
    reverseTabs,
    changeInput,
  } = useInput(currenciesData);

  return (
    <div className={styles.content}>
      <Input
        title="У меня есть"
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
    </div>
  );
};
