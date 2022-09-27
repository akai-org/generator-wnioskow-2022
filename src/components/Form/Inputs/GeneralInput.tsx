import React, { FC } from 'react';

interface GeneralInputComponentProps {
  children: JSX.Element;
  label: string;
}

export const GeneralInput: FC<GeneralInputComponentProps> = ({ children, label }) => {
  return (
    <div className='field'>
      <label>{label}</label>
      <div>{children}</div>
    </div>
  );
};
