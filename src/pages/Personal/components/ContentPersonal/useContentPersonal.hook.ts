import { useEffect, useState } from 'react';

import { useInput } from '../../../../components';
import { useTypedSelector } from '../../../../hooks';
import { Wallet } from '../../../../redux/reducers/wallet/types';
import { CurrenciesData, CurrenciesEnum } from '../../../../types';
import { getWalletAmount } from '../../Personal.utils';

export const useContentPersonal = (currenciesData: CurrenciesData) => {
  const walletData = useTypedSelector((state) => state.wallet);
  const useInputData = useInput(currenciesData);

  const [isExchangeOpen, setExchangeOpen] = useState<boolean>(false);
  const handlerSetExchangeOpen = () => {
    setExchangeOpen((pervIsExchangeOpen) => !pervIsExchangeOpen);
  };

  const [isUSDBuyOpen, setIsUSDBuyOpen] = useState(false);
  const handlerSetIsUSDBuyOpen = () => {
    setIsUSDBuyOpen((prevValue) => !prevValue);
  };

  /* shows only one input at the same time */
  useEffect(() => {
    if (isExchangeOpen === true) {
      setIsUSDBuyOpen(false);
    }
  }, [isExchangeOpen]);

  useEffect(() => {
    if (isUSDBuyOpen === true) {
      setExchangeOpen(false);
    }
  }, [isUSDBuyOpen]);

  const walletAmount = getWalletAmount(currenciesData, walletData);

  const currenciesDataKeys = Object.keys(currenciesData) as Array<keyof typeof CurrenciesEnum>;
  const walletData2USD = currenciesDataKeys.reduce((result, key) => {
    return {
      ...result,
      [CurrenciesEnum[key]]: currenciesData[key].price * walletData[key],
    };
  }, {} as Wallet);

  return {
    walletData,
    useInputData,

    isExchangeOpen,
    handlerSetExchangeOpen,

    isUSDBuyOpen,
    handlerSetIsUSDBuyOpen,

    walletAmount,
    walletData2USD,
  };
};
