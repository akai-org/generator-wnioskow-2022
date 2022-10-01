import styles from '../Form.module.scss';
import React, { ForwardedRef, forwardRef, HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLInputElement> {
  isTextArea?: boolean;
}

export const FieldInput = forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>(
  function FieldInput({ isTextArea, ...rest }, ref) {
    return isTextArea ? (
      <textarea
        ref={ref as ForwardedRef<HTMLTextAreaElement>}
        {...(rest as HTMLProps<HTMLTextAreaElement>)}
      ></textarea>
    ) : (
      <input
        ref={ref as ForwardedRef<HTMLInputElement>}
        {...(rest as HTMLProps<HTMLInputElement>)}
        className={styles.genericInput}
        type='text'
      ></input>
    );
  },
);
