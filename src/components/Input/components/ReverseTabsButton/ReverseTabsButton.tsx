import cn from 'classnames';
import React, { FC } from 'react';

import { arrows } from '../../../../assets/icons';
import styles from './ReverseTabsButton.module.scss';

interface ReverseTabsButtonProps {
  reverseTabs: () => void;
  isHorizontalView?: boolean;
}

export const ReverseTabsButton: FC<ReverseTabsButtonProps> = ({
  reverseTabs,
  isHorizontalView = true,
}) => (
  <div className={styles.reverse}>
    <div className={cn(isHorizontalView ? styles.reverse__horizontal : styles.reverse__vertical)}>
      <button type="button" className={styles.reverse__button} onClick={reverseTabs}>
        <img src={arrows} alt="Reverse selected tabs coins" />
      </button>
    </div>
  </div>
);
