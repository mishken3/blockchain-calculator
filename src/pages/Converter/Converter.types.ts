import { CurrenciesEnum } from './components';

/** REQUEST **/
export interface CurrencyData {
  coin: CurrenciesEnum;
  id: string;
  name: string;
  price: number;
}

export interface CurrenciesDataResponse {
  data: CurrencyData[];
}
export type CurrenciesData = {
  [key in CurrenciesEnum]: {
    id: string;
    name: CurrenciesEnum;
    price: number;
  };
};

export interface CurrenciesDataHook {
  data: CurrenciesData | null;
  isLoading: boolean;
  isHasError: boolean;
}
