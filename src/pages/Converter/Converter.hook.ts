import { useState } from 'react';

import { CurrenciesEnum } from './Calculator.types';

const useTabsData = () => {
  const [tabsData, setTabsData] = useState({
    selectedCurrency: CurrenciesEnum.BTC,
    selectedConversionCurrency: CurrenciesEnum.ETH,
  });

  const handleOnChangeSelectedCurrency = (updatedValue: CurrenciesEnum): void => {
    const updatedState = {
      ...tabsData,
      selectedCurrency: updatedValue,
    };

    setTabsData(updatedState);
  };

  const handleOnChangeSelectedConversionCurrency = (updatedValue: CurrenciesEnum): void => {
    const updatedState = {
      ...tabsData,
      selectedConversionCurrency: updatedValue,
    };

    setTabsData(updatedState);
  };

  return {
    tabsData,
    handleOnChangeSelectedCurrency,
    handleOnChangeSelectedConversionCurrency,
  };
};

const useInputCurrency = () => {
  const [inputsData, setInputsData] = useState({
    selectedInput: 10_000,
    selectedConversionInput: 40_000,
  });

  const handleOnChangeInput = (value: number) =>
    setInputsData({
      ...inputsData,
      selectedInput: value,
    });

  return { inputsData, handleOnChangeInput };
};

export const useConverter = () => {
  const { tabsData, handleOnChangeSelectedCurrency, handleOnChangeSelectedConversionCurrency } =
    useTabsData();

  const { inputsData, handleOnChangeInput } = useInputCurrency();

  return {
    tabsData,
    handleOnChangeSelectedCurrency,
    handleOnChangeSelectedConversionCurrency,

    inputsData,
    handleOnChangeInput,
  };
};
