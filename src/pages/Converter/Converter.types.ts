export enum CurrenciesEnum {
  BTC = 'BTC',
  ETH = 'ETH',
  USD = 'USD',
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
export interface InputsData {
  selectedInput: number;
  selectedConversionInput: number;
}

export interface InputsDataHook {
  inputsData: InputsData;
  handleOnChangeInput: (value: number) => void;
}

/** REQUEST **/
export interface CurrencyData {
  coin: CurrenciesEnum;
  id: string;
  name: string;
  price: number;
}

export interface CurrenciesDataResponse {
  /** data - массив, в котором каждый элемент имеет тип CurrencyData**/
  data: CurrencyData[];
}

export interface CurrenciesDataHook {
  data: CurrenciesDataResponse | null;
  isLoading: boolean;
  isHasError: boolean;
}

/** CONVERTER HOOK **/
export type ConversionHookData = CurrenciesDataHook & TabsDataHook & InputsDataHook;
