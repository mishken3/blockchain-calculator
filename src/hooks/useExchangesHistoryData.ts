import { useEffect, useState } from 'react';

import { ExchangesHistoryDataResponse } from '../types/ExchangesHistoryData.types';
import { CurrenciesEnum } from '../types/types';
import { subtractMonths } from '../utils';
import { useRequest } from './useRequest';

export const useExchangesHistoryData = (
  inputCurrency: CurrenciesEnum,
  outputCurrency: CurrenciesEnum,
) => {
  const currentTime = new Date();
  const monthAgoTime = subtractMonths(1);

  const [exchangesData, setExchangesData] = useState<ExchangesHistoryDataResponse | null>(null);
  const { data, isLoading, isHasError } = useRequest<ExchangesHistoryDataResponse>(
    `https://rest.coinapi.io/v1/exchangerate/${inputCurrency}/${outputCurrency}/history`,
    {
      headers: { 'X-CoinAPI-Key': `${process.env.REACT_APP_COINAPI_FIRSTKEY}` },
      params: {
        period_id: '1DAY',
        time_start: monthAgoTime.toJSON(),
        time_end: currentTime.toJSON(),
      },
    },
    [inputCurrency, outputCurrency],
  );

  useEffect(() => {
    setExchangesData(data);
  }, [data]);

  return { exchangesData, isLoading, isHasError };
};
