import React, { FC, useEffect } from 'react';

import { arrows } from '../../../../assets/icons';
import useActions from '../../../../hooks/useActions';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { ContentProps, CurrencyTabs, InputCurrency } from '../index';
import { useContent } from './Content.hook';
import styles from './Content.module.scss';
import { getExchangeCourse } from './Content.utils';

export const Content: FC<ContentProps> = ({ currenciesData }) => {
  const {
    selectInputTab,
    selectOutputTab,
    reverseTabs,
    changeInput,
    changeOutput,
    changeInputExchange,
    changeOutputExchange,
  } = useActions();

  const { exchangeInputCourse, exchangeConversionInputCourse } = useContent();

  const converterData = useTypedSelector((state) => state.converter);

  // changes currencyCompare
  useEffect(() => {
    const courseInput = getExchangeCourse(
      currenciesData[converterData.inputTab],
      currenciesData[converterData.outputTab],
    );
    changeInputExchange(courseInput);

    const courseOutput = getExchangeCourse(
      currenciesData[converterData.outputTab],
      currenciesData[converterData.inputTab],
    );
    changeOutputExchange(courseOutput);
  }, [currenciesData, converterData.inputTab, converterData.outputTab]);

  // changes inputsFields
  useEffect(() => {
    const outputValue = converterData.input * converterData.inputExchangeCourse;
    changeOutput(outputValue);
  }, [converterData.input, converterData.inputExchangeCourse]);

  return (
    <>
      <div className={styles.input}>
        <CurrencyTabs
          title="У меня есть"
          handleOnClick={selectInputTab}
          selectedCurrency={converterData.inputTab}
        />

        <InputCurrency
          editable
          value={converterData.input}
          onChange={changeInput}
          exchangeCourse={exchangeInputCourse}
        />
      </div>

      <div className={styles.arrows__wrapper}>
        <button type="button" className={styles.arrows__button} onClick={reverseTabs}>
          <img className={styles.arrows} src={arrows} alt="Exchange Change" />
        </button>
      </div>

      <div className={styles.input}>
        <CurrencyTabs
          title="Хочу приобрести"
          handleOnClick={selectOutputTab}
          selectedCurrency={converterData.outputTab}
        />
        <InputCurrency
          editable={false}
          value={converterData.output}
          exchangeCourse={exchangeConversionInputCourse}
        />
      </div>
    </>
  );
};
