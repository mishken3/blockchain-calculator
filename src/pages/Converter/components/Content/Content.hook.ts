import { useEffect, useMemo, useState } from 'react';

import {
  ContentDataHook,
  InputsData,
  InputsHookProps,
  TabsData,
  TabsDataHook,
} from './Content.types';
import { getExchangeCourse } from './Content.utils';

export enum CurrenciesEnum {
  BTC = 'BTC',
  ETH = 'ETH',
  USD = 'USD',
}

const useTabsData = (): TabsDataHook => {
  const [tabsData, setTabsData] = useState<TabsData>({
    selectedCurrency: CurrenciesEnum.USD,
    selectedConversionCurrency: CurrenciesEnum.BTC,
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

const useInputCurrency = ({ tabs, currenciesData }: InputsHookProps) => {
  const initialInputsData = useMemo(() => {
    const exchangeInputCourse = getExchangeCourse(
      currenciesData[tabs.selectedCurrency],
      currenciesData[tabs.selectedConversionCurrency],
    );

    const exchangeConversionInputCourse = getExchangeCourse(
      currenciesData[tabs.selectedConversionCurrency],
      currenciesData[tabs.selectedCurrency],
    );

    return {
      selectedInput: 100,
      selectedInputExchangeCourse: exchangeInputCourse,

      selectedConversionInput: exchangeInputCourse,
      selectedConversionInputExchangeCourse: exchangeConversionInputCourse,
    };
  }, []);

  const [inputsData, setInputsData] = useState<InputsData>(initialInputsData);

  const handleOnChangeInput = (value: number): void =>
    setInputsData({
      ...inputsData,
      selectedInput: value,
    });

  useEffect(() => {
    setInputsData({
      ...inputsData,
      selectedConversionInput: inputsData.selectedInput * inputsData.selectedInputExchangeCourse,
    });
  }, [inputsData.selectedInput, inputsData.selectedInputExchangeCourse]);

  useEffect(() => {
    setInputsData({
      ...inputsData,
      selectedInputExchangeCourse: getExchangeCourse(
        currenciesData[tabs.selectedCurrency],
        currenciesData[tabs.selectedConversionCurrency],
      ),
      selectedConversionInputExchangeCourse: getExchangeCourse(
        currenciesData[tabs.selectedConversionCurrency],
        currenciesData[tabs.selectedCurrency],
      ),
    });
  }, [currenciesData, tabs]);

  return { inputsData, handleOnChangeInput };
};

export const useContent: ContentDataHook = (currenciesData) => {
  const tabs = useTabsData();

  const inputsHookData = useInputCurrency({
    currenciesData,
    tabs: tabs.tabsData,
  });

  return {
    ...tabs,
    ...inputsHookData,
  };
};
