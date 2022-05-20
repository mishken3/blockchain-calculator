import React, { FC } from 'react';

import { Wrapper } from '../../components';
import { Calculator, CurrencyTabs } from './components/';
import styles from './Converter.module.scss';

export const ConverterPage: FC = () => (
  <Wrapper>
    <h1 className={styles.converter__title}>Converter page</h1>
    <CurrencyTabs title="У меня есть" />
    {/* <Calculator /> */}
  </Wrapper>
);
