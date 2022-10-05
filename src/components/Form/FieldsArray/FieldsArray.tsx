import { FormRegistrationProperties, NO_ACTIVITIES_ERROR } from 'utils';
import { FC } from 'react';
import { SingleActivityForm } from './SingleActivityForm';
import { UseFieldArrayRemove } from 'react-hook-form';
import { ValidationError } from '../../UI/ValidationError/ValidationError';

interface Props extends FormRegistrationProperties {
  onRemove: UseFieldArrayRemove;
}

export const FieldsArray: FC<Props> = ({ fields, errors, register, onRemove }) => {
  return (
    <section>
      {fields.map((field, index) => (
        <SingleActivityForm
          onRemove={onRemove}
          key={field.id}
          errors={errors}
          index={index}
          register={register}
        />
      ))}
      <ValidationError error={errors.activities?.message} errorMessage={NO_ACTIVITIES_ERROR} />
    </section>
  );
};
