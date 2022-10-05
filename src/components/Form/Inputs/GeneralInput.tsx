import React, { FC } from 'react';
import styles from '../Form.module.scss';
import { ValidationError } from '../../UI/ValidationError/ValidationError';

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
      <ValidationError error={error} errorMessage={errorMessage} />
    </div>
  );
};
