import { useEffect, useState } from 'react';

import { useRequest } from '../../hooks';
import { CurrenciesEnum } from './components';
import { CurrenciesData, CurrenciesDataResponse } from './Converter.types';

export const useCurrenciesData = () => {
  const [currenciesData, setCurrenciesData] = useState<CurrenciesData | null>(null);
  const { data, isLoading, isHasError } = useRequest<CurrenciesDataResponse>(
    'https://api.minerstat.com/v2/coins?list=BTC,ETH',
    {},
    [],
  );

  useEffect(() => {
    if (data) {
      const initialState = {
        [CurrenciesEnum.USD]: {
          id: String(new Date().getTime()),
          name: CurrenciesEnum.USD,
          price: 1,
        },
      };

      const currencies = data.data.reduce<CurrenciesData>(
        (acc, item) => ({
          ...acc,
          [CurrenciesEnum[item.coin]]: {
            id: item.id,
            name: item.coin,
            price: item.price,
          },
        }),

        initialState as CurrenciesData,
      );

      setCurrenciesData(currencies);
    }
  }, [data]);

  return { currenciesData, isLoading, isHasError };
};
