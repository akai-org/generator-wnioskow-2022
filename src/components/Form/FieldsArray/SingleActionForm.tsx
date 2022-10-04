import { FieldInput, GeneralInput } from '../Inputs';
import {
  NO_DESCRIPTION_ERROR,
  NO_END_DATE_ERROR,
  NO_START_DATE_ERROR,
  SchemaType,
} from '../../../utils';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FC } from 'react';

interface Props {
  errors: FieldErrors<SchemaType>;
  index: number;
  register: UseFormRegister<SchemaType>;
}

export const SingleActionForm: FC<Props> = ({ errors, index, register }) => {
  return (
    <div>
      <GeneralInput
        errorMessage={NO_DESCRIPTION_ERROR}
        error={errors.actions?.[index]?.description?.message}
        label='Działania:'
      >
        <FieldInput {...register(`actions.${index}.description`)} />
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
    </div>
  );
};
