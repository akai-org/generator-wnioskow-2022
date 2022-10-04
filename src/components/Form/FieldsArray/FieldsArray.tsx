import { SchemaType } from 'utils';
import { FC } from 'react';
import { DeepPartial, FieldArrayWithId, FieldErrors, UseFormRegister } from 'react-hook-form';
import { SingleActionForm } from './SingleActionForm';

interface Props {
  fields: FieldArrayWithId<DeepPartial<SchemaType>, 'actions', 'id'>[];
  errors: FieldErrors<SchemaType>;
  register: UseFormRegister<SchemaType>;
}

export const FieldsArray: FC<Props> = ({ fields, errors, register }) => {
  return (
    <section>
      {fields.map((field, index) => (
        <SingleActionForm key={field.id} errors={errors} index={index} register={register} />
      ))}
    </section>
  );
};
