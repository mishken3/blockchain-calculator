import { useActions } from '../../../../hooks';
import { Input } from '../../../../redux/reducers/input/types';
import { CurrenciesData } from '../../../../types/CurrenciesData.types';
import { CurrenciesEnum } from '../../../../types/types';
import { useTypedSelector } from './../../../../hooks/useTypedSelector';

export const useInputExhchage = (currenciesData: CurrenciesData) => {
  const { updateWallet } = useActions();
  const walletData = useTypedSelector((state) => state.wallet);

  const exchangeAction = (inputData: Input): void => {
    const coinFrom = inputData.inputTab;
    const coinTo = inputData.outputTab;
    if (coinFrom === coinTo) return;

    const convertedInputValue = inputData.input / currenciesData[inputData.outputTab].price;

    updateWallet({
      ...walletData,
      [CurrenciesEnum[coinFrom]]: walletData[CurrenciesEnum[coinFrom]] - inputData.input,
      [CurrenciesEnum[coinTo]]: walletData[CurrenciesEnum[coinTo]] + convertedInputValue,
    });
  };

  return { exchangeAction };
};
