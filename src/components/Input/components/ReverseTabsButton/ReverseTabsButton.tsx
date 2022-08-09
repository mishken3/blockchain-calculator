import cn from 'classnames';
import React, { FC } from 'react';

import { arrows } from '../../../../assets/icons';
import { useWindowDimensions } from '../../../../hooks';
import styles from './ReverseTabsButton.module.scss';

interface ReverseTabsButtonProps {
  reverseTabs: () => void;
  isHorizontalView?: boolean;
}

export const ReverseTabsButton: FC<ReverseTabsButtonProps> = ({
  reverseTabs,
  isHorizontalView = true,
}) => {
  const { width: windowWidth } = useWindowDimensions();

  return (
    <div className={styles.reverse}>
      {windowWidth >= 768 ? (
        <div
          className={cn(isHorizontalView ? styles.reverse__horizontal : styles.reverse__vertical)}>
          <button type="button" className={styles.reverse__button} onClick={reverseTabs}>
            {windowWidth >= 768 ? (
              <img src={arrows} alt="Reverse selected tabs coins" />
            ) : (
              <p>Обменять</p>
            )}
          </button>
        </div>
      ) : (
        <button type="button" className={styles.reverse__button} onClick={reverseTabs}>
          {windowWidth >= 768 ? (
            <img src={arrows} alt="Reverse selected tabs coins" />
          ) : (
            <p>Обменять</p>
          )}
        </button>
      )}
    </div>
  );
};
