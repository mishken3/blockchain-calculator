import React, { FC } from 'react';

import { Input, ReverseTabsButton, useInput } from '../../../../components';
import { CurrenciesData } from '../../../../types/CurrenciesData.types';

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
    <>
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
    </>
  );
};
