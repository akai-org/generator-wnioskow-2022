import React, { FC } from 'react';

interface GeneralInputComponentProps {
  children: JSX.Element | JSX.Element[] | string | string[] | undefined;
  label: string;
  error?: string;
}

export const GeneralInput: FC<GeneralInputComponentProps> = ({ children, label, error }) => {
  return (
    <div className='field'>
      <label>{label}</label>
      <div>{children}</div>
      <p>{error}</p>
    </div>
  );
};
