export const getBeautifyCoinAmount = (num: number) => {
  return Number(num.toFixed(3)).toLocaleString('ru-RU');
};
