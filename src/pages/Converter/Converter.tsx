import React, { FC, useState } from 'react';

import { Wrapper } from '../../components';
import { Calculator, CurrencyTabs } from './components/';
import styles from './Converter.module.scss';

export const ConverterPage: FC = () => {
  const [tabsData, setTabsData] = useState({
    selectedCurrency: 'BTC',
    selectedConversionCurrency: 'ETH',
  });

  const handleOnChangeSelectedCurrency = (updatedValue: string): void => {
    const updatedState = {
      ...tabsData,
      selectedCurrency: updatedValue,
    };

    setTabsData(updatedState);
  };

  const handleOnChangeSelectedConversionCurrency = (updatedValue: string): void => {
    const updatedState = {
      ...tabsData,
      selectedConversionCurrency: updatedValue,
    };

    setTabsData(updatedState);
  };

  return (
    <Wrapper>
      <h1 className={styles.converter__title}>Converter page</h1>

      <CurrencyTabs
        handleOnClick={handleOnChangeSelectedCurrency}
        selectedCurrency={tabsData.selectedCurrency}
        title="У меня есть"
      />

      <br />
      <br />

      <CurrencyTabs
        handleOnClick={handleOnChangeSelectedConversionCurrency}
        selectedCurrency={tabsData.selectedConversionCurrency}
        title="Хочу приобрести"
      />

      {/* <Calculator /> */}
    </Wrapper>
  );
};
