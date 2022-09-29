import { FieldInput, FieldSelect, GeneralInput } from './Inputs';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

const schema = z
  .object({
    leaderName: z
      .string({ required_error: '' })
      .min(1, 'Imię i nazwisko przewodniczącego koła są wymagane'),
    scienceClub: z.string().min(1, 'Nazwa klubu naukowego jest wymagana'),
    department: z.string().min(1, 'Nazwa wydziału jest wymagana'),
    clubPatron: z.string().min(1, 'Imię i nazwisko opiekuna klubu jest wymagane'),
    fullName: z.string().min(1, 'Imię i nazwisko jest wymagane'),
    index: z.string().min(1, 'Numer albumu jest wymagany'),
    role: z.string().min(1, 'Funkcja pełniona w kole jest wymagana'),
  })
  .required();

export type SchemaType = z.TypeOf<typeof schema>;

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaType>({
    resolver: zodResolver(schema),
  });

  const onHandleSubmit: SubmitHandler<SchemaType> = async (data) => {
    console.log(data.leaderName);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onHandleSubmit)}
        style={{ backgroundColor: '#EEEEEE', width: '800px' }}
      >
        <h2>Dane koła</h2>
        <GeneralInput error={errors.leaderName?.message} label='Przewodniczący koła naukowego: '>
          <FieldInput {...register('leaderName')} inputType='text' />
        </GeneralInput>
        <GeneralInput error={errors.scienceClub?.message} label='Nazwa koła naukowego: '>
          <FieldSelect {...register('scienceClub')} options={[]} />
        </GeneralInput>
        <GeneralInput error={errors.department?.message} label='Nazwa wydziału:'>
          <FieldSelect {...register('department')} options={[]} />
        </GeneralInput>
        <GeneralInput
          error={errors.clubPatron?.message}
          label='Opiekun koła (wraz z tytułem/tytułami):'
        >
          <FieldInput {...register('clubPatron')} inputType='text' />
        </GeneralInput>
        <h2>Dane indywidualne</h2>
        <GeneralInput error={errors.fullName?.message} label='Imię i nazwisko: '>
          <FieldInput {...register('fullName')} inputType='text' />
        </GeneralInput>
        <GeneralInput error={errors.index?.message} label='Indeks'>
          <FieldInput {...register('index')} inputType='text' />
        </GeneralInput>
        <GeneralInput error={errors.role?.message} label='Funkcja w kole'>
          <FieldInput {...register('role')} inputType='text' />
        </GeneralInput>

        <input type='submit' />
      </form>
    </div>
  );
};
