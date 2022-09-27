import styles from '../Form.module.scss';
import React from 'react';

interface Props {
  inputType: string;
  isTextArea?: boolean;
}

export function FieldInput({ inputType, isTextArea }: Props) {
  return isTextArea ? (
    <textarea></textarea>
  ) : (
    <input className={styles.input} type={inputType}></input>
  );
}
