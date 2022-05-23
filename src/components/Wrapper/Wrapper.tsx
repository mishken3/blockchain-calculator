import React, { FC, ReactNode } from 'react';

import { Body, Header } from './components';
import styles from './Wrapper.module.scss';

interface WrapperProps {
  children: ReactNode;
}

export const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Body>{children}</Body>
    </div>
  );
};
