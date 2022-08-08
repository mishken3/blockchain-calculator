export const subtractMonths = (numOfMonths: number, date = new Date()) => {
  date.setMonth(date.getMonth() - numOfMonths);
  return date;
};
