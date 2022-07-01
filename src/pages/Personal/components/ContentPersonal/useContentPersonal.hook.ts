import { useState } from 'react';

import { useInput } from '../../../../components';
import { useTypedSelector } from '../../../../hooks';
import { CurrenciesData } from '../../../../types/CurrenciesData.types';
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

  const walletAmount = getWalletAmount(currenciesData, walletData);

  return {
    walletData,
    useInputData,

    isExchangeOpen,
    handlerSetExchangeOpen,

    isUSDBuyOpen,
    handlerSetIsUSDBuyOpen,

    walletAmount,
  };
};
