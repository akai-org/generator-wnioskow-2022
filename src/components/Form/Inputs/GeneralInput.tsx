import React, { FC } from 'react';
import styles from '../Form.module.scss';

interface GeneralInputComponentProps {
  children: JSX.Element;
  label: string;
  error?: string;
  errorMessage?: string;
}

export const GeneralInput: FC<GeneralInputComponentProps> = ({
  children,
  label,
  error,
  errorMessage,
}) => {
  return (
    <div className={styles.field}>
      <label>{label}</label>
      <div className={styles.inputBox}>{children}</div>
      <p className={[styles.error, error ? styles.errorShown : styles.errorHidden].join(' ')}>
        {errorMessage}
      </p>
    </div>
  );
};
