import { CurrenciesEnum } from '../../../types/types';
import { INPUT_ACTION_TYPES } from './action-types';

/** state **/
export interface Input {
  inputTab: CurrenciesEnum;
  outputTab: CurrenciesEnum;

  input: number;
  inputExchangeCourse: number;
  output: number;
  outputExchangeCourse: number;
}

/** action-creators **/
export interface SelectInputTabAction {
  type: INPUT_ACTION_TYPES.SELECT_INPUT_TAB;
  payload: CurrenciesEnum;
}

export interface SelectOutputTabAction {
  type: INPUT_ACTION_TYPES.SELECT_OUTPUT_TAB;
  payload: CurrenciesEnum;
}

export interface ReverseTabsAction {
  type: INPUT_ACTION_TYPES.REVERSE_TABS;
}

export interface ChangeInputAction {
  type: INPUT_ACTION_TYPES.CHANGE_INPUT;
  payload: number;
}

export interface ChangeOutputAction {
  type: INPUT_ACTION_TYPES.CHANGE_OUTPUT;
  payload: number;
}

export interface ChangeInputExchangeAction {
  type: INPUT_ACTION_TYPES.CHANGE_INPUT_EXCHANGE_COURSE;
  payload: number;
}
export interface ChangeOutputExchangeAction {
  type: INPUT_ACTION_TYPES.CHANGE_OUTPUT_EXCHANGE_COURSE;
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
