import { useEffect, useState } from 'react';

import { useActions } from '../../../../hooks';
import { Input } from '../../../../redux/reducers/input/types';
import { CurrenciesEnum } from '../../../../types/types';
import { useTypedSelector } from './../../../../hooks/useTypedSelector';

interface InputExhchageHook {
  exchangeAction: (inputData: Input) => void;
  isSellingCoinBalanceLow: boolean;
}

export const useInputExhchage = (inputData: Input): InputExhchageHook => {
  const { updateWallet } = useActions();
  const walletData = useTypedSelector((state) => state.wallet);

  const coinFrom = inputData.inputTab;
  const coinTo = inputData.outputTab;
  const inputField = inputData.input;
  const coinFromBalance = walletData[inputData.inputTab];

  const [isSellingCoinBalanceLow, setIsSellingCoinBalanceLow] = useState<boolean>(false);

  useEffect(() => {
    inputData.input > coinFromBalance
      ? setIsSellingCoinBalanceLow(true)
      : setIsSellingCoinBalanceLow(false);
  }, [inputField, coinFromBalance]);

  const exchangeAction = (inputData: Input) => {
    if (coinFrom === coinTo || inputData.input > coinFromBalance) return;

    updateWallet({
      ...walletData,
      [CurrenciesEnum[coinFrom]]: walletData[CurrenciesEnum[coinFrom]] - inputData.input,
      [CurrenciesEnum[coinTo]]: walletData[CurrenciesEnum[coinTo]] + inputData.output,
    });
  };

  return { exchangeAction, isSellingCoinBalanceLow };
};
