import { useEffect, useState } from 'react';

import { useCurrenciesData } from './Converter.request';
import {
  ConversionHookData,
  CurrenciesEnum,
  InputsData,
  InputsDataHook,
  TabsData,
  TabsDataHook,
} from './Converter.types';

const useTabsData = (): TabsDataHook => {
  const [tabsData, setTabsData] = useState<TabsData>({
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

  const handleOnReverseTabs = (): void =>
    setTabsData({
      ...tabsData,
      selectedCurrency: tabsData.selectedConversionCurrency,
      selectedConversionCurrency: tabsData.selectedCurrency,
    });

  return {
    tabsData,
    handleOnChangeSelectedCurrency,
    handleOnChangeSelectedConversionCurrency,
    handleOnReverseTabs,
  };
};

const useInputCurrency = (): InputsDataHook => {
  const [inputsData, setInputsData] = useState<InputsData>({
    selectedInput: 10_000,
    selectedConversionInput: 40_000,
  });

  const handleOnChangeInput = (value: number): void =>
    setInputsData({
      ...inputsData,
      selectedInput: value,
    });

  useEffect(() => {
    setInputsData({
      ...inputsData,
      selectedConversionInput: inputsData.selectedInput * 2,
    });
  }, [inputsData.selectedInput]);

  return { inputsData, handleOnChangeInput };
};

export const useConverter = (): ConversionHookData => {
  const requestData = useCurrenciesData();

  const tabsHookData = useTabsData();
  const inputsHookData = useInputCurrency();

  return {
    ...tabsHookData,
    ...inputsHookData,

    ...requestData,
  };
};
