import styles from '../Form.module.scss';
import React from 'react';

interface Props {
  isTextArea?: boolean;
}

export function FieldInput({ isTextArea }: Props) {
  return isTextArea ? (
    <textarea></textarea>
  ) : (
    <input className={styles.genericInput} type='text'></input>
  );
}
