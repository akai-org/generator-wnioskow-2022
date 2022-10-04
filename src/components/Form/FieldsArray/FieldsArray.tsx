import { FormRegistrationProperties } from 'utils';
import { FC } from 'react';
import { SingleActionForm } from './SingleActionForm';

type Props = FormRegistrationProperties;

export const FieldsArray: FC<Props> = ({ fields, errors, register }) => {
  return (
    <section>
      {fields.map((field, index) => (
        <SingleActionForm key={field.id} errors={errors} index={index} register={register} />
      ))}
    </section>
  );
};
