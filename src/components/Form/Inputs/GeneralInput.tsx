import React, { FC } from 'react';
import styles from '../Form.module.scss';

interface GeneralInputComponentProps {
  children: JSX.Element;
  label: string;
  error?: string;
}

export const GeneralInput: FC<GeneralInputComponentProps> = ({ children, label, error }) => {
  return (
    <div className={styles.field}>
      <label>{label}</label>
      <div className={styles.inputBox}>{children}</div>
      <p>{error}</p>
    </div>
  );
};
