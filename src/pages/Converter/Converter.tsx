import React, { FC } from 'react';

import { arrows } from '../../assets/icons';
import { Wrapper } from '../../components';
// import { Calculator, CurrencyTabs } from './components/';
import { CurrencyTabs, InputCurrency } from './components/';
import { useConverter } from './Converter.hook';
import styles from './Converter.module.scss';
import { ConversionHookData } from './Converter.types';

export const ConverterPage: FC = () => {
  const {
    tabsData,
    handleOnChangeSelectedCurrency,
    handleOnChangeSelectedConversionCurrency,

    inputsData,
    handleOnChangeInput,
  }: ConversionHookData = useConverter();

  return (
    <Wrapper pageName="Конвертер">
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

      <div className={styles.arrows_wrapper}>
        <img className={styles.arrows} src={arrows} alt="Exchange Change" />
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

      {/* <Calculator /> */}
    </Wrapper>
  );
};
