export const getBeautifyAmount = (num: number) => {
  return Number(num.toFixed(2)).toLocaleString('ru-RU');
};
