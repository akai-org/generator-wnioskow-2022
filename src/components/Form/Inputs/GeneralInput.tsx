import React, { FC } from 'react';
import styles from '../Form.module.scss';

interface GeneralInputComponentProps {
  children: JSX.Element;
  label: string;
}

export const GeneralInput: FC<GeneralInputComponentProps> = ({ children, label }) => {
  return (
    <div className={styles.field}>
      <label>{label}</label>
      <div className={styles.inputBox}>{children}</div>
    </div>
  );
};
