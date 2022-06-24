import { CurrencyData } from '../../types/CurrenciesData.types';

type GetExchangeCourseType = (
  coinFrom: Omit<CurrencyData, 'coin'>,
  coinTo: Omit<CurrencyData, 'coin'>,
) => number;

export const getExchangeCourse: GetExchangeCourseType = (coinTo, coinFrom) => {
  const fixedStringedNum = (coinTo.price / coinFrom.price).toFixed(5);
  return Number(fixedStringedNum);
};
