import styles from '../Form.module.scss';
import React, { forwardRef, HTMLProps } from 'react';

interface SelectProps extends HTMLProps<HTMLSelectElement> {
  options: string[];
}

export const FieldSelect = forwardRef<HTMLSelectElement, SelectProps>(function FieldSelect(
  { options, ...rest },
  ref,
) {
  return (
    <select ref={ref} {...rest} className={styles.genericInput}>
      <option value='default' hidden disabled>
        -- Wybierz opcję --
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
});
