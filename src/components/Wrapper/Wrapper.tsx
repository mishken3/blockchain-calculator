import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Body, Header } from './components';
import styles from './Wrapper.module.scss';

interface WrapperProps {
  pageName?: string;
}

export const Wrapper: FC<WrapperProps> = ({ pageName }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.page}>
        <p className={styles.page__name}>"{pageName}" pageName doesnt work</p>
        <Body>
          <Outlet />
        </Body>
      </div>
    </div>
  );
};
