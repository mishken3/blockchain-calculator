import React, { FC } from 'react';

import { arrows } from '../../../../assets/icons';
import styles from './ReverseTabsButton.module.scss';

interface ReverseTabsButtonProps {
  reverseTabs: () => void;
}

export const ReverseTabsButton: FC<ReverseTabsButtonProps> = ({ reverseTabs }) => {
  return (
    <div className={styles.arrows__wrapper}>
      <button type="button" className={styles.arrows__button} onClick={reverseTabs}>
        <img className={styles.arrows} src={arrows} alt="Exchange Change" />
      </button>
    </div>
  );
};
