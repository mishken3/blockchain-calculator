import { CurrenciesEnum } from './Content.hook';

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
export interface InputsData {
  selectedInput: number;
  selectedConversionInput: number;
}

export interface InputsDataHook {
  inputsData: InputsData;
  handleOnChangeInput: (value: number) => void;
}

/** CONTENT TYPES **/
export type ContentDataHook = TabsDataHook & InputsDataHook;
