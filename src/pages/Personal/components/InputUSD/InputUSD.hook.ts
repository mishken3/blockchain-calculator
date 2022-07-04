import { useActions, useTypedSelector } from '../../../../hooks';
import { Input } from '../../../../redux/reducers/input/types';
import { CurrenciesEnum } from '../../../../types/types';

export const useInputUSD = (inputData: Input) => {
  const { updateWallet } = useActions();
  const walletData = useTypedSelector((state) => state.wallet);

  const increaseWalletUSD = () => {
    updateWallet({
      ...walletData,
      [CurrenciesEnum.USD]: walletData[CurrenciesEnum.USD] + inputData.input,
    });

    inputData.input = 0;
  };

  return { increaseWalletUSD };
};
