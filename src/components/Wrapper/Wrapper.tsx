import React, { FC, ReactNode } from 'react';
import styles from './Wrapper.module.css';

interface WrapperProps {
  // children?: ReactNode;
  children: ReactNode;
}

export const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.page}>
        <div className={styles.tabs}>
          <a className={styles.tabs__item} href="/converter">
            Конвертер
          </a>
          <a className={styles.tabs__item} href="/">
            Личный кабинет
          </a>
        </div>

        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
