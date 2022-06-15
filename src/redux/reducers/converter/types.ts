import { CurrenciesEnum } from '../../../pages/Converter/components';
import { CONVERTER_ACTION_TYPES } from './action-types';

/** state **/
export interface Converter {
  inputTab: CurrenciesEnum;
  outputTab: CurrenciesEnum;

  input: number;
  inputExchangeCourse: number;
  output: number;
  outputExchangeCourse: number;
}

/** action-creators **/
export interface SelectInputTabAction {
  type: CONVERTER_ACTION_TYPES.SELECT_INPUT_TAB;
  payload: CurrenciesEnum;
}

export interface SelectOutputTabAction {
  type: CONVERTER_ACTION_TYPES.SELECT_OUTPUT_TAB;
  payload: CurrenciesEnum;
}

export interface ReverseTabsAction {
  type: CONVERTER_ACTION_TYPES.REVERSE_TABS;
}

export interface ChangeInputAction {
  type: CONVERTER_ACTION_TYPES.CHANGE_INPUT;
  payload: number;
}

export interface ChangeOutputAction {
  type: CONVERTER_ACTION_TYPES.CHANGE_OUTPUT;
  payload: number;
}

export interface ChangeInputExchangeAction {
  type: CONVERTER_ACTION_TYPES.CHANGE_INPUT_EXCHANGE_COURSE;
  payload: number;
}
export interface ChangeOutputExchangeAction {
  type: CONVERTER_ACTION_TYPES.CHANGE_OUTPUT_EXCHANGE_COURSE;
  payload: number;
}

export type ConverterAction =
  | SelectInputTabAction
  | SelectOutputTabAction
  | ReverseTabsAction
  | ChangeInputAction
  | ChangeOutputAction
  | ChangeInputExchangeAction
  | ChangeOutputExchangeAction;
