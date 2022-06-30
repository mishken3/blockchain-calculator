import React, { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Header } from './components';
import styles from './Wrapper.module.scss';

export const Wrapper: FC = () => {
  const currentPath = useLocation().pathname;
  const pageName = currentPath === '/' ? 'Портфель' : 'Конвертер';

  return (
    <div className={styles.page}>
      <div className={styles.page__header}>
        <Header />
      </div>

      <div className={styles.page__content}>
        <p className={styles.page__name}>{pageName}</p>
        <Outlet />
      </div>
    </div>
  );
};
