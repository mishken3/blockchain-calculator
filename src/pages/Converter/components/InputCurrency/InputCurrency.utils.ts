export const getClearedValue = (value: string): string => value.replace(/\s/gm, '');

export const isOnlyNumbers = (str: string): boolean =>
  str.replace(/\D/gm, '').length === str.length;

export const isMaxLength = (value: string): boolean => getClearedValue(value).length <= 10;
