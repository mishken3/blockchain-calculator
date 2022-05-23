import React from 'react';

import { useRequest } from '../../hooks';

export const TestPage = () => {
  const url = 'https://api.minerstat.com/v2/coins';
  // v1 - передача query параметров внутри url
  // const { data, isLoading, isHasError } = useRequest(
  //   'https://api.minerstat.com/v2/coins?list=BTC,ETH',
  //   {},
  //   [],
  // );

  // v2 - передача query параметров внутри объекта конфигурации. В объекте query

  const { data, isLoading, isHasError } = useRequest(
    url,
    {
      method: 'GET',
      quety: { list: 'BTC,ETH' },
    },
    [],
  );

  if (isLoading) {
    return <h1>Загрузка</h1>;
  }

  if (isHasError) {
    return <h1>Ошибочка вышла</h1>;
  }

  console.log('data :>> ', data);

  return <h1>TEST PAGE FOR REQUESTS</h1>;
};
