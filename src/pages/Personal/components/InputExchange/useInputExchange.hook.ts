import { useActions } from '../../../../hooks';
import { Converter } from '../../../../redux/reducers/converter/types';
import { CurrenciesData } from '../../../../types/CurrenciesData.types';
import { CurrenciesEnum } from '../../../../types/types';
import { useTypedSelector } from './../../../../hooks/useTypedSelector';

/* TODO converterData -> inputData */

export const useInputExhchage = (currenciesData: CurrenciesData) => {
  const { updateWallet } = useActions();
  const walletData = useTypedSelector((state) => state.wallet);

  const exchangeAction = (converterData: Converter): void => {
    const coinFrom = converterData.inputTab;
    const coinTo = converterData.outputTab;
    if (coinFrom === coinTo) return;

    const convertedInputValue = converterData.input / currenciesData[converterData.outputTab].price;

    updateWallet({
      ...walletData,
      [CurrenciesEnum[coinFrom]]: walletData[CurrenciesEnum[coinFrom]] - converterData.input,
      [CurrenciesEnum[coinTo]]: walletData[CurrenciesEnum[coinTo]] + convertedInputValue,
    });
  };

  return { exchangeAction };
};
