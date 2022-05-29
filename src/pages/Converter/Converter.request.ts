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
      data.data.push({
        coin: CurrenciesEnum.USD,
        id: String(new Date().getTime()),
        name: 'Dollar',
        price: 1,
      });

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const currencies: CurrenciesData = data.data.reduce(
        (acc, item) => ({
          ...acc,
          [item.coin]: {
            id: item.id,
            name: item.coin,
            price: item.price,
          },
        }),
        {},
      );

      setCurrenciesData(currencies);
    }
  }, [data]);

  return { currenciesData, isLoading, isHasError };
};
