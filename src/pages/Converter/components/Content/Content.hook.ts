import { useEffect, useState } from 'react';

import { CurrencyData } from '../../Converter.types';
import {
  ContentDataHook,
  InputsData,
  InputsHookProps,
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

/** TODO
 * ВЫНЕСТИ В ОТДЕЛЬНЫЙ ФАЙЛ
 **/

type GetExchangeCourseProps = (
  to: Omit<CurrencyData, 'coin'>,
  from: Omit<CurrencyData, 'coin'>,
) => string;

const getExchangeCourse: GetExchangeCourseProps = (to, from) => {
  const course = to.price / from.price;
  return `1 ${to.name} === ${course} ${from.name}`;
};

/** TODO **/

const useInputCurrency = ({ tabs, currenciesData }: InputsHookProps) => {
  const exchangeCourse = getExchangeCourse(
    currenciesData[tabs.selectedCurrency],
    currenciesData[tabs.selectedConversionCurrency],
  );

  const [inputsData, setInputsData] = useState<InputsData>({
    selectedInput: 10_000,
    selectedInputExchangeCourse: exchangeCourse,

    selectedConversionInput: 40_000,
    selectedConversionInputExchangeCourse: getExchangeCourse(
      currenciesData[tabs.selectedConversionCurrency],
      currenciesData[tabs.selectedCurrency],
    ),
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

export const useContent: ContentDataHook = (currenciesData) => {
  const tabsHookData = useTabsData();

  const inputsHookData = useInputCurrency({
    currenciesData,
    tabs: tabsHookData.tabsData,
  });

  return {
    ...tabsHookData,
    ...inputsHookData,
  };
};
