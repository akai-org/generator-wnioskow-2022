import styles from './Form.module.scss';
import { FieldInput, FieldSelect, GeneralInput } from './Inputs';
import {
  FormRegistrationProperties,
  FULL_NAME_ERROR,
  INDEX_NUMBER_ERROR,
  ROLE_ERROR,
  SUMMER_PERIOD,
  WINTER_PERIOD,
} from 'utils';
import { FieldsArray } from './FieldsArray/FieldsArray';
import { FC } from 'react';
import { UseFieldArrayRemove } from 'react-hook-form';

interface Props extends FormRegistrationProperties {
  onRemove: UseFieldArrayRemove;
}

const years = ['2021/2022', '2022/2023', '2023/2024', '2024/2025'];

export const PersonalInfo: FC<Props> = ({ fields, errors, register, onRemove }) => {
  return (
    <section className={styles.formSection}>
      <h2 className={styles.header}>Dane indywidualne</h2>
      <div className={styles.nameAndIdBox}>
        <GeneralInput
          errorMessage={FULL_NAME_ERROR}
          error={errors.fullName?.message}
          label='Imię i nazwisko: '
        >
          <FieldInput {...register('fullName')} />
        </GeneralInput>
        <GeneralInput
          errorMessage={INDEX_NUMBER_ERROR}
          error={errors.indexNumber?.message}
          label='Indeks'
        >
          <FieldInput {...register('indexNumber')} />
        </GeneralInput>
      </div>
      <GeneralInput errorMessage={ROLE_ERROR} error={errors.role?.message} label='Funkcja w kole'>
        <FieldInput {...register('role')} />
      </GeneralInput>
      <div className={styles.selectBox}>
        <GeneralInput label='Rok:'>
          <FieldSelect options={years} />
        </GeneralInput>
        <GeneralInput label='Semestr:'>
          <FieldSelect options={[WINTER_PERIOD, SUMMER_PERIOD]} />
        </GeneralInput>
      </div>
      <FieldsArray onRemove={onRemove} fields={fields} errors={errors} register={register} />
    </section>
  );
};
