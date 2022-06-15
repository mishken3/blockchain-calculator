import React, { FC } from 'react';

import { arrows } from '../../../../assets/icons';
import { ContentProps, CurrencyTabs, InputCurrency, useContent } from '../index';
import styles from './Content.module.scss';

export const Content: FC<ContentProps> = ({ currenciesData }) => {
  const {
    exchangeInputCourse,
    exchangeConversionInputCourse,

    converterData,

    selectInputTab,
    selectOutputTab,
    reverseTabs,
    changeInput,
  } = useContent(currenciesData);

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
