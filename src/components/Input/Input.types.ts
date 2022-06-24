import { Converter } from '../../redux/reducers/converter/types';
import { CurrenciesEnum } from '../../types/types';
import { CurrencyTabsProps, InputCurrencyProps } from './components';

export type InputPropsT = CurrencyTabsProps & InputCurrencyProps;

export interface ContentDataHook {
  exchangeInputCourse: string;
  exchangeConversionInputCourse: string;

  converterData: Converter;

  selectInputTab: (tabName: CurrenciesEnum) => void;
  selectOutputTab: (tabName: CurrenciesEnum) => void;
  reverseTabs: () => void;
  changeInput: (inputValue: number) => void;
}
