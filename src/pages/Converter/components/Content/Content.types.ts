import { Converter } from '../../../../redux/reducers/converter/types';
import { CurrenciesData } from '../../Converter.types';
import { CurrenciesEnum } from './Content.hook';

export interface ContentProps {
  currenciesData: CurrenciesData;
}

export interface ContentDataHook {
  exchangeInputCourse: string;
  exchangeConversionInputCourse: string;

  converterData: Converter;

  selectInputTab: (tabName: CurrenciesEnum) => void;
  selectOutputTab: (tabName: CurrenciesEnum) => void;
  reverseTabs: () => void;
  changeInput: (inputValue: number) => void;
}
