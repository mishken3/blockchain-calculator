import cn from 'classnames';
import React, { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import styles from './Wrapper.module.scss';

interface WrapperProps {
  children: ReactNode;
}

export const Wrapper: FC<WrapperProps> = ({ children }) => {
  const isPersonalPage = window.location.pathname === '/';

  return (
    <div className={styles.wrapper}>
      <div className={styles.page}>
        <div className={styles.tabs}>
          <Link
            className={cn(styles.tabs__item, !isPersonalPage && styles.tabs__item_selected)}
            to="/converter">
            Конвертер
          </Link>
          <Link
            className={cn(styles.tabs__item, isPersonalPage && styles.tabs__item_selected)}
            to="/">
            Личный кабинет
          </Link>
        </div>

        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
