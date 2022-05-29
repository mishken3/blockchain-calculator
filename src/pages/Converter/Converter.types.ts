import { CurrenciesEnum } from './components';

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
