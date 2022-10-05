import { FieldInput, GeneralInput } from '../Inputs';
import {
  NO_DESCRIPTION_ERROR,
  NO_END_DATE_ERROR,
  NO_START_DATE_ERROR,
  SchemaType,
  WRONG_DATES_ERROR,
} from '../../../utils';
import { Button } from '../Inputs/Button';
import styles from './Activities.module.scss';
import { FieldErrors, UseFieldArrayRemove, UseFormRegister } from 'react-hook-form';
import React, { FC } from 'react';
import { ValidationError } from '../../UI/ValidationError/ValidationError';

interface Props {
  errors: FieldErrors<SchemaType>;
  index: number;
  register: UseFormRegister<SchemaType>;
  onRemove: UseFieldArrayRemove;
}

export const SingleActivityForm: FC<Props> = ({ errors, index, register, onRemove }) => {
  const humanReadableIndex = index + 1;

  return (
    <div>
      <h3>Aktywność #{humanReadableIndex}</h3>
      <div className={styles.singleActivity}>
        <GeneralInput
          errorMessage={NO_DESCRIPTION_ERROR}
          error={errors.activities?.[index]?.description?.message}
          label='Działania:'
        >
          <FieldInput isTextArea {...register(`activities.${index}.description`)} />
        </GeneralInput>
        <div className={styles.box}>
          <div className={styles.innerBox}>
            <GeneralInput
              errorMessage={NO_START_DATE_ERROR}
              error={errors.activities?.[index]?.startDate?.message}
              label='Data rozpoczęcia:'
            >
              <FieldInput {...register(`activities.${index}.startDate`)} type='date' />
            </GeneralInput>
            <GeneralInput
              errorMessage={NO_END_DATE_ERROR}
              error={errors.activities?.[index]?.endDate?.message}
              label='Data zakończenia:'
            >
              <FieldInput {...register(`activities.${index}.endDate`)} type='date' />
            </GeneralInput>
          </div>
          <Button onClick={() => onRemove(index)} isDark>
            Usuń aktywność
          </Button>
        </div>
      </div>
      <ValidationError
        errorMessage={WRONG_DATES_ERROR}
        error={errors.activities?.[index]?.message}
      />
    </div>
  );
};
