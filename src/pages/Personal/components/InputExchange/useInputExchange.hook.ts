import { useActions } from '../../../../hooks';
import { Input } from '../../../../redux/reducers/input/types';
import { CurrenciesEnum } from '../../../../types/types';
import { useTypedSelector } from './../../../../hooks/useTypedSelector';

interface InputExhchageHook {
  exchangeAction: (inputData: Input) => void;
}

export const useInputExhchage = (): InputExhchageHook => {
  const { updateWallet } = useActions();
  const walletData = useTypedSelector((state) => state.wallet);

  const exchangeAction = (inputData: Input) => {
    const coinFrom = inputData.inputTab;
    const coinTo = inputData.outputTab;
    const coinFromBalance = walletData[inputData.inputTab];

    if (coinFrom === coinTo || inputData.input > coinFromBalance) return;

    updateWallet({
      ...walletData,
      [CurrenciesEnum[coinFrom]]: walletData[CurrenciesEnum[coinFrom]] - inputData.input,
      [CurrenciesEnum[coinTo]]: walletData[CurrenciesEnum[coinTo]] + inputData.output,
    });
  };

  return { exchangeAction };
};
