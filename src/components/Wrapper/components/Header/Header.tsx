import cn from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { logo, profile_photo } from '../../../../assets/icons';
import { useWindowDimensions } from '../../../../hooks';
import styles from './Header.module.scss';

interface GetClassNamesProps {
  isActive: boolean;
}
type GetClassNames = (props: GetClassNamesProps) => string;

export const Header = () => {
  const { width: windowWidth } = useWindowDimensions();

  const getClassNames: GetClassNames = ({ isActive }) =>
    cn(styles.tabs__item, isActive && styles.tabs__item_selected);

  return (
    <div className={styles.header}>
      <img className={styles.logo} src={logo} alt="Blockchain logo" />

      <div className={styles.tabs}>
        <NavLink className={getClassNames} to="/converter">
          Конвертер
        </NavLink>
        <NavLink className={getClassNames} to="/">
          Портфель
        </NavLink>
      </div>

      <div className={styles.profile}>
        <img className={styles.profile__photo} src={profile_photo} alt="Profile logo" />
        {windowWidth >= 475 && <span className={styles.profile__name}>Саша Петров</span>}
      </div>
    </div>
  );
};
