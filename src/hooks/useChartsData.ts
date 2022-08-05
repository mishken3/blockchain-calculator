import { useEffect, useState } from 'react';

import { CurrenciesEnum } from '../types/types';
import { useRequest } from './useRequest';

export interface ChartsDataHook {
  chartsData: ChartsData[] | null;
  isLoading: boolean;
  isHasError: boolean;
}

interface ChartsData {
  rate_close: number;
  rate_high: number;
  rate_low: number;
  rate_open: number;
  time_close: string;
  time_open: string;
  time_period_end: string;
  time_period_start: string;
}

interface ChartsDataResponse {
  data: ChartsData[];
}

export const useChartsData = () => {
  const APIKey = '90509B00-FF7F-47F2-AC69-A5C82CAD7DA1';
  const tempAPIKey = '698594B8-B832-415F-8990-C87178EE0EE7';

  const subtractMonths = (numOfMonths: number, date = new Date()) => {
    date.setMonth(date.getMonth() - numOfMonths);
    return date;
  };
  /* TODO: PLACEHOLDER DATA, ALL WILL COME FROM PROPS */

  const selectedInputTab = CurrenciesEnum.BTC;
  const selectedOutputTab = CurrenciesEnum.USD;

  const currentTime = new Date();
  const monthAgoTime = subtractMonths(1);
  const currentTimeJSON = currentTime.toJSON();
  const monthAgoTimeJSON = monthAgoTime.toJSON();

  /* PLACEHOLDER DATA, ALL WILL COME FROM PROPS */

  const [chartsData, setChartsData] = useState<ChartsData | null>(null);
  const { data, isLoading, isHasError } = useRequest<ChartsDataResponse>(
    `https://rest.coinapi.io/v1/exchangerate/${selectedInputTab}/${selectedOutputTab}/history`,
    {
      headers: { 'X-CoinAPI-Key': tempAPIKey },
      params: {
        period_id: '1DAY',
        time_start: monthAgoTimeJSON,
        time_end: currentTimeJSON,
      },
    },
    [],
  );

  useEffect(() => {
    setChartsData(data?.data);
  }, [data]);

  return { chartsData, isLoading, isHasError };
};
