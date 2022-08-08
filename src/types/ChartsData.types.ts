export interface ExchangeHistoryData {
  rate_open: number;
  time_open: string;
}

export type ExchangesData = {
  [key: number]: {
    rate_open: number;
    time_open: string;
  };
};

export interface ExchangesHistoryDataResponse {
  data: ExchangeHistoryData[];
}

export interface ExchangesDataHook {
  exchangesData: ExchangesData | null;
  isLoading: boolean;
  isHasError: boolean;
}
