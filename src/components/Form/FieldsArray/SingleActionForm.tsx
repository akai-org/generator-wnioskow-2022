import { FieldInput, GeneralInput } from '../Inputs';
import {
  NO_DESCRIPTION_ERROR,
  NO_END_DATE_ERROR,
  NO_START_DATE_ERROR,
  SchemaType,
} from '../../../utils';
import { FieldErrors, UseFieldArrayRemove, UseFormRegister } from 'react-hook-form';
import { FC } from 'react';

interface Props {
  errors: FieldErrors<SchemaType>;
  index: number;
  register: UseFormRegister<SchemaType>;
  onRemove: UseFieldArrayRemove;
}

export const SingleActionForm: FC<Props> = ({ errors, index, register, onRemove }) => {
  const humanReadableIndex = index + 1;

  return (
    <div>
      <h3>Aktywność #{humanReadableIndex}</h3>
      <GeneralInput
        errorMessage={NO_DESCRIPTION_ERROR}
        error={errors.actions?.[index]?.description?.message}
        label='Działania:'
      >
        <FieldInput isTextArea {...register(`actions.${index}.description`)} />
      </GeneralInput>
      <GeneralInput
        errorMessage={NO_START_DATE_ERROR}
        error={errors.actions?.[index]?.startDate?.message}
        label='Data rozpoczęcia:'
      >
        <FieldInput {...register(`actions.${index}.startDate`)} type='date' />
      </GeneralInput>
      <GeneralInput
        errorMessage={NO_END_DATE_ERROR}
        error={errors.actions?.[index]?.endDate?.message}
        label='Data zakończenia:'
      >
        <FieldInput {...register(`actions.${index}.endDate`)} type='date' />
      </GeneralInput>
      <button type='button' onClick={() => onRemove(index)}>
        Usuń aktywność
      </button>
    </div>
  );
};
