import React from 'react';
import styles from './Wrapper.module.css';

export const Wrapper = () => {
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

        <div className={styles.content}>children</div>
      </div>
    </div>
  );
};
