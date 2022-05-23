import React, { FC, ReactNode } from 'react';

import styles from './Body.module.scss';

interface WrapperProps {
  children: ReactNode;
}

export const Body: FC<WrapperProps> = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};
