import { FormRegistrationProperties } from 'utils';
import { FC } from 'react';
import { SingleActionForm } from './SingleActionForm';
import { UseFieldArrayRemove } from 'react-hook-form';

interface Props extends FormRegistrationProperties {
  onRemove: UseFieldArrayRemove;
}

export const FieldsArray: FC<Props> = ({ fields, errors, register, onRemove }) => {
  return (
    <section>
      {fields.map((field, index) => (
        <SingleActionForm
          onRemove={onRemove}
          key={field.id}
          errors={errors}
          index={index}
          register={register}
        />
      ))}
    </section>
  );
};
