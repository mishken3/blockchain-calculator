import React from 'react';

import { arrows } from '../../../../assets/icons';
import { CurrencyTabs, InputCurrency } from '../index';
import { useContent } from './Content.hook';
import styles from './Content.module.scss';
import { ContentDataHook } from './Content.types';

export const Content = () => {
  const {
    tabsData,
    handleOnChangeSelectedCurrency,
    handleOnChangeSelectedConversionCurrency,
    handleOnReverseTabs,

    inputsData,
    handleOnChangeInput,
  }: ContentDataHook = useContent();

  return (
    <>
      <div className={styles.input}>
        <CurrencyTabs
          handleOnClick={handleOnChangeSelectedCurrency}
          selectedCurrency={tabsData.selectedCurrency}
          title="У меня есть"
        />

        <InputCurrency
          editable
          value={inputsData.selectedInput}
          onChange={handleOnChangeInput}
          exchangeCourse={'1 === 1'}
        />
      </div>

      <div className={styles.arrows__wrapper}>
        <button type="button" className={styles.arrows__button} onClick={handleOnReverseTabs}>
          <img className={styles.arrows} src={arrows} alt="Exchange Change" />
        </button>
      </div>

      <div className={styles.input}>
        <CurrencyTabs
          handleOnClick={handleOnChangeSelectedConversionCurrency}
          selectedCurrency={tabsData.selectedConversionCurrency}
          title="Хочу приобрести"
        />
        <InputCurrency
          editable={false}
          value={inputsData.selectedConversionInput}
          exchangeCourse={'1 === 1'}
        />
      </div>
    </>
  );
};
