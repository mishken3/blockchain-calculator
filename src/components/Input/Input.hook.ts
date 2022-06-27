import { useEffect, useMemo } from 'react';

import { useActions, useTypedSelector } from '../../hooks';
import { CurrenciesData } from '../../types/CurrenciesData.types';
import { ContentDataHook } from './Input.types';
import { getExchangeCourse } from './Input.utils';

/* TODO Rename useContent -> useInput */
export const useInput = (currenciesData: CurrenciesData): ContentDataHook => {
  const {
    selectInputTab,
    selectOutputTab,
    reverseTabs,
    changeInput,
    changeOutput,
    changeInputExchange,
    changeOutputExchange,
  } = useActions();

  const converterData = useTypedSelector((state) => state.converter);

  // changes currencyCompare
  useEffect(() => {
    const courseInput = getExchangeCourse(
      currenciesData[converterData.inputTab],
      currenciesData[converterData.outputTab],
    );
    changeInputExchange(courseInput);

    const courseOutput = getExchangeCourse(
      currenciesData[converterData.outputTab],
      currenciesData[converterData.inputTab],
    );
    changeOutputExchange(courseOutput);
  }, [currenciesData, converterData.inputTab, converterData.outputTab]);

  // changes inputsFields
  useEffect(() => {
    const outputValue = converterData.input * converterData.inputExchangeCourse;
    changeOutput(outputValue);
  }, [converterData.input, converterData.inputExchangeCourse]);

  const exchangeInputCourse = useMemo(
    () =>
      `1 ${converterData.inputTab} = ${converterData.inputExchangeCourse} ${converterData.outputTab}`,
    [converterData.inputTab, converterData.outputTab, converterData.inputExchangeCourse],
  );

  const exchangeConversionInputCourse = useMemo(
    () =>
      `1 ${converterData.outputTab} = ${converterData.outputExchangeCourse} ${converterData.inputTab}`,
    [converterData.inputTab, converterData.outputTab, converterData.inputExchangeCourse],
  );

  return {
    exchangeInputCourse,
    exchangeConversionInputCourse,

    converterData,

    selectInputTab,
    selectOutputTab,
    reverseTabs,
    changeInput,
  };
};
