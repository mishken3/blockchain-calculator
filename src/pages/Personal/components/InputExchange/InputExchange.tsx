import React, { FC } from 'react';

import { Input, InputDataHook, ReverseTabsButton } from '../../../../components';
import styles from './InputExchange.module.scss';
import { useInputExhchage } from './useInputExchange.hook';

interface InputExchangeProps {
  useInputData: InputDataHook;
}

export const InputExchange: FC<InputExchangeProps> = ({ useInputData }) => {
  const {
    exchangeInputCourse,
    exchangeConversionInputCourse,

    inputData,

    selectInputTab,
    selectOutputTab,
    reverseTabs,
    changeInput,
  } = useInputData;

  const { isSellingCoinBalanceLow, exchangeAction } = useInputExhchage(inputData);

  const handleExchangeAction = (): void => {
    exchangeAction(inputData);
  };

  return (
    <div className={styles.exchange}>
      <Input
        title="Хочу продать"
        handleOnClick={selectInputTab}
        selectedCurrency={inputData.inputTab}
        editable
        value={inputData.input}
        onChange={changeInput}
        textBelowInput={exchangeInputCourse}
        isHorizontalView={false}
      />

      <ReverseTabsButton reverseTabs={reverseTabs} isHorizontalView={false} />

      <Input
        title="Хочу приобрести"
        handleOnClick={selectOutputTab}
        selectedCurrency={inputData.outputTab}
        editable={false}
        value={inputData.output}
        textBelowInput={exchangeConversionInputCourse}
        isHorizontalView={false}
      />

      <button
        className={styles.exchange__button}
        onClick={handleExchangeAction}
        disabled={isSellingCoinBalanceLow}>
        Stonks
      </button>

      {isSellingCoinBalanceLow && (
        <p className={styles.exchange__error}>Слишком мало {inputData.inputTab} для покупки.</p>
      )}
    </div>
  );
};
