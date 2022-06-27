import { useEffect, useMemo } from 'react';

import { useActions, useTypedSelector } from '../../hooks';
import { CurrenciesData } from '../../types/CurrenciesData.types';
import { InputDataHook } from './Input.types';
import { getExchangeCourse } from './Input.utils';

export const useInput = (currenciesData: CurrenciesData): InputDataHook => {
  const {
    selectInputTab,
    selectOutputTab,
    reverseTabs,
    changeInput,
    changeOutput,
    changeInputExchange,
    changeOutputExchange,
  } = useActions();

  const inputData = useTypedSelector((state) => state.input);

  // changes currencyCompare
  useEffect(() => {
    const courseInput = getExchangeCourse(
      currenciesData[inputData.inputTab],
      currenciesData[inputData.outputTab],
    );
    changeInputExchange(courseInput);

    const courseOutput = getExchangeCourse(
      currenciesData[inputData.outputTab],
      currenciesData[inputData.inputTab],
    );
    changeOutputExchange(courseOutput);
  }, [currenciesData, inputData.inputTab, inputData.outputTab]);

  // changes inputsFields
  useEffect(() => {
    const outputValue = inputData.input * inputData.inputExchangeCourse;
    changeOutput(outputValue);
  }, [inputData.input, inputData.inputExchangeCourse]);

  const exchangeInputCourse = useMemo(
    () => `1 ${inputData.inputTab} = ${inputData.inputExchangeCourse} ${inputData.outputTab}`,
    [inputData.inputTab, inputData.outputTab, inputData.inputExchangeCourse],
  );

  const exchangeConversionInputCourse = useMemo(
    () => `1 ${inputData.outputTab} = ${inputData.outputExchangeCourse} ${inputData.inputTab}`,
    [inputData.inputTab, inputData.outputTab, inputData.inputExchangeCourse],
  );

  return {
    exchangeInputCourse,
    exchangeConversionInputCourse,

    inputData,

    selectInputTab,
    selectOutputTab,
    reverseTabs,
    changeInput,
  };
};
