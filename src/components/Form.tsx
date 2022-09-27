import React from 'react';
import styles from './Form.module.scss';

interface InputProps {
  label: string;
  inputType: string;
}

function FieldInput({ label, inputType }: InputProps) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>{label}</label>
      <div>
        <input className={styles.input} type={inputType}></input>
      </div>
    </div>
  );
}

interface SelectProps {
  label: string;
  options: any;
}

function FieldSelect({ label, options }: SelectProps) {
  return (
    <div className='field'>
      <label>{label}</label>
      <div>
        <select></select>
      </div>
    </div>
  );
}

export class Form extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <form style={{ backgroundColor: '#EEEEEE', width: '800px' }}>
          <h2>Dane koła</h2>
          <FieldInput label={'Przewodniczący koła naukowego: '} inputType={'text'} />
          <FieldSelect label={'Nazwa koła naukowego: '} options={''} />
          <FieldSelect label={'Nazwa wydziału: '} options={''} />
          <FieldInput label={'Opiekun koła (wraz z tytułem/tytułami):'} inputType={'text'} />
          <h2>Dane indywidualne</h2>
          <FieldInput label={'Imię i nazwisko: '} inputType={'text'} />
          <FieldInput label={'Indeks'} inputType={'text'} />
          <FieldInput label={'Funkcja'} inputType={'text'} />
        </form>
      </div>
    );
  }
}
