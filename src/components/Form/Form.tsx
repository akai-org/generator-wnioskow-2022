import { FieldInput, FieldSelect, GeneralInput } from './Inputs';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './Form.module.scss';

interface Props {
  departments: string[];
  scienceClubs: string[];
}

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

const years = ['2021/2022', '2022/2023', '2023/2024', '2024/2025'];

export const Form = ({ departments, scienceClubs }: Props) => {
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
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <section className={styles.formSection}>
          <h2 className={styles.header}>Dane koła</h2>
          <GeneralInput error={errors.leaderName?.message} label='Przewodniczący koła naukowego: '>
            <FieldInput {...register('leaderName')} />
          </GeneralInput>
          <GeneralInput error={errors.scienceClub?.message} label='Nazwa koła naukowego: '>
            <FieldSelect {...register('scienceClub')} options={scienceClubs} />
          </GeneralInput>
          <GeneralInput error={errors.department?.message} label='Nazwa wydziału:'>
            <FieldSelect {...register('department')} options={departments} />
          </GeneralInput>
          <GeneralInput
              error={errors.clubPatron?.message}
              label='Opiekun koła (wraz z tytułem/tytułami):'
          >
            <FieldInput {...register('clubPatron')} />
          </GeneralInput>
        </section>
        <section className={styles.formSection}>
          <h2 className={styles.header}>Dane indywidualne</h2>
          <GeneralInput error={errors.fullName?.message} label='Imię i nazwisko: '>
            <FieldInput {...register('fullName')} />
          </GeneralInput>
          <GeneralInput error={errors.index?.message} label='Indeks'>
            <FieldInput {...register('index')} />
          </GeneralInput>
          <GeneralInput error={errors.role?.message} label='Funkcja w kole'>
            <FieldInput {...register('role')} />
          </GeneralInput>
          <div className={styles.selectBox}>
            <GeneralInput label='Rok:'>
              <FieldSelect options={years} />
            </GeneralInput>
            <GeneralInput label='Semestr:'>
              <FieldSelect options={['zimowy', 'letni']} />
            </GeneralInput>
          </div>
        </section>

        <button type='submit'>Generuj wniosek</button>
      </form>
    </div>
  );
};
