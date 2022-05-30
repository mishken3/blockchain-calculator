import { CurrenciesData } from '../../Converter.types';
import { CurrenciesEnum } from './Content.hook';

export interface ContentProps {
  currenciesData: CurrenciesData;
}

/** TABS * */
export interface TabsData {
  selectedCurrency: CurrenciesEnum;
  selectedConversionCurrency: CurrenciesEnum;
}

export interface TabsDataHook {
  tabsData: TabsData;
  handleOnChangeSelectedCurrency: (updatedValue: CurrenciesEnum) => void;
  handleOnChangeSelectedConversionCurrency: (updatedValue: CurrenciesEnum) => void;
  handleOnReverseTabs: () => void;
}

/** INPUTS * */
export interface InputsHookProps {
  currenciesData: CurrenciesData;
  tabs: TabsData;
}

export interface InputsData {
  selectedInput: number;
  selectedInputExchangeCourse: string;

  selectedConversionInput: number;
  selectedConversionInputExchangeCourse: string;
}

export interface InputsHookData {
  inputsData: InputsData;
  handleOnChangeInput: (value: number) => void;
}

/** CONTENT TYPES **/
export type ContentDataHook = (currenciesData: CurrenciesData) => TabsDataHook & InputsHookData;
