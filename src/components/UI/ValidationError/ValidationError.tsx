import styles from './ValidationError.module.scss';
import React, { FC } from 'react';

interface Props {
  error?: string;
  errorMessage?: string;
}

export const ValidationError: FC<Props> = ({ errorMessage, error }) => {
  return (
    <p className={[styles.error, error ? styles.errorShown : styles.errorHidden].join(' ')}>
      {error ?? errorMessage}
    </p>
  );
};
