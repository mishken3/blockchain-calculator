import React, { FC } from 'react';

import { Wrapper } from '../../components';
import { Calculator } from './components/Calculator';

export const ConverterPage: FC = () => (
  <Wrapper>
    <p>Это будет конвертер</p>
    <Calculator></Calculator>
  </Wrapper>
);
