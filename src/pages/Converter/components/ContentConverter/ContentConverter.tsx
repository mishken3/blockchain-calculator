import React, { FC } from 'react';

import { Input, ReverseTabsButton, useContent } from '../../../../components';
import { CurrenciesData } from '../../../../types/CurrenciesData.types';

interface ContentConverterProps {
  currenciesData: CurrenciesData;
}

export const ContentConverter: FC<ContentConverterProps> = ({ currenciesData }) => {
  const {
    exchangeInputCourse,
    exchangeConversionInputCourse,

    converterData,

    selectInputTab,
    selectOutputTab,
    reverseTabs,
    changeInput,
  } = useContent(currenciesData);

  return (
    <>
      <Input
        title="У меня есть"
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
    </>
  );
};
