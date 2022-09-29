import React from 'react';
import styles from '../Form.module.scss';

interface SelectProps {
  options: string[];
}

export function FieldSelect({ options }: SelectProps) {
  return (
    <select className={styles.genericInput}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
