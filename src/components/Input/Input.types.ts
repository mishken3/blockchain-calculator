import { Input } from '../../redux/reducers/input/types';
import { CurrenciesEnum } from '../../types';
import { CurrencyTabsProps, InputFieldProps } from './components';

export type InputPropsT = CurrencyTabsProps & InputFieldProps;

export interface InputDataHook {
  exchangeInputCourse: string;
  exchangeConversionInputCourse: string;

  inputData: Input;

  selectInputTab: (tabName: CurrenciesEnum) => void;
  selectOutputTab: (tabName: CurrenciesEnum) => void;
  reverseTabs: () => void;
  changeInput: (inputValue: number) => void;
}
