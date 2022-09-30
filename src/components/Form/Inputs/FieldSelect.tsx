import styles from '../Form.module.scss';
import React, { forwardRef } from 'react';

interface SelectProps {
  options: string[];
}

export const FieldSelect = forwardRef<HTMLSelectElement, SelectProps>(function FieldSelect(
  { options },
  ref,
) {
  return (
    <select ref={ref} className={styles.genericInput}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
});
