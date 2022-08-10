export type ExchangeHistoryData = {
  rate_open: number;
  time_open: string;
};

export interface ExchangesHistoryDataResponse {
  data: ExchangeHistoryData[];
}

export interface ExchangesHistoryDataHook {
  exchangesData: ExchangesHistoryDataResponse | null;
  isLoading: boolean;
  isHasError: boolean;
}
