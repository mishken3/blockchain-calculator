import React, { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Header } from './components';
import styles from './Wrapper.module.scss';

export const Wrapper: FC = () => {
  const currentPath = useLocation().pathname;
  const pageName = currentPath === '/' ? 'Портфель' : 'Конвертер';

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.page}>
        <p className={styles.page__name}>{pageName}</p>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
