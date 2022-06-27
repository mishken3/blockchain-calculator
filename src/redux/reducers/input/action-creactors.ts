import { CurrenciesEnum } from '../../../types/types';
import { INPUT_ACTION_TYPES } from './action-types';
import {
  ChangeInputAction,
  ChangeInputExchangeAction,
  ChangeOutputAction,
  ChangeOutputExchangeAction,
  ReverseTabsAction,
  SelectInputTabAction,
  SelectOutputTabAction,
} from './types';

export const selectInputTab = (tabName: CurrenciesEnum): SelectInputTabAction => ({
  type: INPUT_ACTION_TYPES.SELECT_INPUT_TAB,
  payload: tabName,
});

export const selectOutputTab = (tabName: CurrenciesEnum): SelectOutputTabAction => ({
  type: INPUT_ACTION_TYPES.SELECT_OUTPUT_TAB,
  payload: tabName,
});

export const reverseTabs = (): ReverseTabsAction => ({
  type: INPUT_ACTION_TYPES.REVERSE_TABS,
});

export const changeInput = (inputValue: number): ChangeInputAction => ({
  type: INPUT_ACTION_TYPES.CHANGE_INPUT,
  payload: inputValue,
});

export const changeOutput = (outpuValue: number): ChangeOutputAction => ({
  type: INPUT_ACTION_TYPES.CHANGE_OUTPUT,
  payload: outpuValue,
});

export const changeInputExchange = (course: number): ChangeInputExchangeAction => ({
  type: INPUT_ACTION_TYPES.CHANGE_INPUT_EXCHANGE_COURSE,
  payload: course,
});

export const changeOutputExchange = (course: number): ChangeOutputExchangeAction => ({
  type: INPUT_ACTION_TYPES.CHANGE_OUTPUT_EXCHANGE_COURSE,
  payload: course,
});
