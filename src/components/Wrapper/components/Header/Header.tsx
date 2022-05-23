import cn from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import { logo, profile_photo } from '../../../../assets/icons';
import styles from './Header.module.scss';

export const Header = () => {
  const isPersonalPage = window.location.pathname === '/';

  return (
    <div className={styles.header}>
      <img className={styles.logo} src={logo} alt="Blockchain logo" />

      <div className={styles.tabs}>
        <Link
          className={cn(styles.tabs__item, !isPersonalPage && styles.tabs__item_selected)}
          to="/converter">
          Конвертер
        </Link>
        <Link
          className={cn(styles.tabs__item, isPersonalPage && styles.tabs__item_selected)}
          to="/">
          Портфель
        </Link>
      </div>

      <div className={styles.profile}>
        <img className={styles.profile__photo} src={profile_photo} alt="Profile logo" />
        <span className={styles.profile__name}>Саша Петров</span>
      </div>
    </div>
  );
};
