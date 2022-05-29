import { useEffect, useState } from 'react';

import {
  ContentDataHook,
  InputsData,
  InputsDataHook,
  TabsData,
  TabsDataHook,
} from './Content.types';

export enum CurrenciesEnum {
  BTC = 'BTC',
  ETH = 'ETH',
  USD = 'USD',
}

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

export const useContent = (): ContentDataHook => {
  const tabsHookData = useTabsData();
  const inputsHookData = useInputCurrency();

  return {
    ...tabsHookData,
    ...inputsHookData,
  };
};
