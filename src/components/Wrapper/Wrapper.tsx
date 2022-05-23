import React, { FC, ReactNode } from 'react';

import { Body, Header } from './components';
import styles from './Wrapper.module.scss';

interface WrapperProps {
  children: ReactNode;
  pageName: string;
}

export const Wrapper: FC<WrapperProps> = ({ children, pageName }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.page}>
        <p className={styles.page__name}>{pageName}</p>
        <Body>{children}</Body>
      </div>
    </div>
  );
};
