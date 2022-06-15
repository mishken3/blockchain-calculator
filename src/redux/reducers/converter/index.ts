import { CurrenciesEnum } from '../../../pages/Converter/components';
import { CONVERTER_ACTION_TYPES } from './action-types';
import { Converter, ConverterAction } from './types';

const initialState: Converter = {
  inputTab: CurrenciesEnum.BTC,
  outputTab: CurrenciesEnum.ETH,

  input: 1,
  inputExchangeCourse: 16.307259498296023,
  output: 16.307259498296023,
  outputExchangeCourse: 0.06132238222519804,
};

export default (state = initialState, action: ConverterAction) => {
  switch (action.type) {
    case CONVERTER_ACTION_TYPES.SELECT_INPUT_TAB: {
      return {
        ...state,
        inputTab: action.payload,
      };
    }

    case CONVERTER_ACTION_TYPES.SELECT_OUTPUT_TAB: {
      return {
        ...state,
        outputTab: action.payload,
      };
    }

    case CONVERTER_ACTION_TYPES.REVERSE_TABS: {
      return {
        ...state,
        inputTab: state.outputTab,
        outputTab: state.inputTab,
      };
    }

    case CONVERTER_ACTION_TYPES.CHANGE_INPUT: {
      return {
        ...state,
        input: action.payload,
      };
    }

    case CONVERTER_ACTION_TYPES.CHANGE_OUTPUT: {
      const output = state.input * state.inputExchangeCourse;

      return {
        ...state,
        output,
      };
    }

    case CONVERTER_ACTION_TYPES.CHANGE_INPUT_EXCHANGE_COURSE: {
      return {
        ...state,
        inputExchangeCourse: action.payload,
      };
    }

    case CONVERTER_ACTION_TYPES.CHANGE_OUTPUT_EXCHANGE_COURSE: {
      return {
        ...state,
        outputExchangeCourse: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
