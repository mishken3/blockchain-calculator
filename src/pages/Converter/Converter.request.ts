import { useEffect } from 'react';

import { useRequest } from '../../hooks';
import { CurrenciesDataHook, CurrenciesDataResponse, CurrenciesEnum } from './Converter.types';

export const useCurrenciesData = (): CurrenciesDataHook => {
  const url = 'https://api.minerstat.com/v2/coins?list=BTC,ETH';

  const { data, isLoading, isHasError } = useRequest<CurrenciesDataResponse>(url, {}, []);

  useEffect(() => {
    if (data) {
      console.log('data.data :>> ', data.data);
      data.data.push({
        coin: CurrenciesEnum.USD,
        id: String(new Date().getTime()),
        name: 'American Dollar',
        price: 1,
      });
    }
  }, [data]);

  return { data, isLoading, isHasError };
};
