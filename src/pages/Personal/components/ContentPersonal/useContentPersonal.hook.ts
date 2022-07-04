import { useEffect, useState } from 'react';

import { useInput } from '../../../../components';
import { useTypedSelector } from '../../../../hooks';
import { Wallet } from '../../../../redux/reducers/wallet/types';
import { CurrenciesData } from '../../../../types/CurrenciesData.types';
import { CurrenciesEnum } from '../../../../types/types';
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

  /* TODO walletData2USD */
  /*
  const walletData2USD = Object.keys(currenciesData).reduce<Wallet2USD>((result, key) => {
    return {
      ...result,
      [CurrenciesEnum[key]]: currenciesData[key].price * walletData[key],
    };
  }, {} as Wallet);
 */
  const walletData2USD = 'walletData2USD';

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
