import React from 'react';

interface SelectProps {
  options: string[];
}

export function FieldSelect({ options }: SelectProps) {
  return (
    <select>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
