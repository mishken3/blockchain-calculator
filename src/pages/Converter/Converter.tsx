import React, { FC } from 'react';

import { Wrapper } from '../../components';
// import { Calculator, CurrencyTabs } from './components/';
import { CurrencyTabs, InputCurrency } from './components/';
import { useConverter } from './Converter.hook';
import styles from './Converter.module.scss';

export const ConverterPage: FC = () => {
  const {
    tabsData,
    handleOnChangeSelectedCurrency,
    handleOnChangeSelectedConversionCurrency,

    inputsData,
    handleOnChangeInput,
  } = useConverter();

  return (
    <Wrapper>
      <h1 className={styles.converter__title}>Converter page</h1>

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
      <br />
      <br />

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

      {/* <Calculator /> */}
    </Wrapper>
  );
};
