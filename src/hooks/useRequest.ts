import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

// eslint-disable-next-line no-promise-executor-return,max-len
const wait = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(() => resolve(), ms));

/**
 * useRequest - кастомный хук для совершения запроса
 * @param endpoint - url запроса
 * @param requestParams - headers, data с которыми совершается запрос
 * @param deps - массив зависимостей изходя из которого запрос будет совершаться
 */
export const useRequest = <T>(endpoint: string, requestParams: object, deps: never[] = []) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isHasError, setIsHasError] = useState<boolean>(false);

  useEffect(() => {
    const getData = async (): Promise<void> => {
      setIsLoading(true);

      try {
        await wait(1000);
        const result: AxiosResponse = await axios(endpoint, requestParams);

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setData(result);
      } catch (e) {
        setIsHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, deps);

  return { data, isLoading, isHasError };
};
