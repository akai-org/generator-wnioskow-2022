import styles from './Form.module.scss';
import { FieldInput, FieldSelect, GeneralInput } from './Inputs';
import {
  CLUB_PATRON_ERROR,
  DEPARTMENT_ERROR,
  FormRegistrationProperties,
  LEADER_NAME_ERROR,
  SCIENCE_CLUB_ERROR,
} from '../../utils';
import { FC } from 'react';

interface Props extends Omit<FormRegistrationProperties, 'fields'> {
  scienceClubs: string[];
  departments: string[];
}

export const ScienceClubInfo: FC<Props> = ({ errors, register, scienceClubs, departments }) => {
  return (
    <section className={styles.formSection}>
      <h2 className={styles.header}>Dane koła</h2>
      <GeneralInput
        errorMessage={LEADER_NAME_ERROR}
        error={errors.leaderName?.message}
        label='Przewodniczący koła naukowego: '
      >
        <FieldInput {...register('leaderName')} />
      </GeneralInput>
      <GeneralInput
        errorMessage={SCIENCE_CLUB_ERROR}
        error={errors.scienceClub?.message}
        label='Nazwa koła naukowego: '
      >
        <FieldSelect {...register('scienceClub')} options={scienceClubs} />
      </GeneralInput>
      <GeneralInput
        errorMessage={DEPARTMENT_ERROR}
        error={errors.department?.message}
        label='Nazwa wydziału:'
      >
        <FieldSelect {...register('department')} options={departments} />
      </GeneralInput>
      <GeneralInput
        errorMessage={CLUB_PATRON_ERROR}
        error={errors.clubPatron?.message}
        label='Opiekun koła (wraz z tytułem/tytułami):'
      >
        <FieldInput {...register('clubPatron')} />
      </GeneralInput>
    </section>
  );
};
