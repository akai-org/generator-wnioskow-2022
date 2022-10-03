import { FieldInput, FieldSelect, GeneralInput } from './Inputs';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './Form.module.scss';
import {
  CLUB_PATRON_ERROR,
  DEPARTMENT_ERROR,
  FULL_NAME_ERROR,
  INDEX_NUMBER_ERROR,
  LEADER_NAME_ERROR,
  PERIOD_ERROR,
  ROLE_ERROR,
  SCIENCE_CLUB_ERROR,
  SUMMER_PERIOD,
  WINTER_PERIOD,
} from 'utils';
import { useEffect } from 'react';
import { useLocalStorage } from 'react-use';

interface Props {
  departments: string[];
  scienceClubs: string[];
}

const schema = z.object({
  leaderName: z.string().min(1, LEADER_NAME_ERROR),
  scienceClub: z
    .string()
    .min(1, SCIENCE_CLUB_ERROR)
    .refine((value) => value !== 'default', { message: SCIENCE_CLUB_ERROR }),
  department: z
    .string()
    .min(1, DEPARTMENT_ERROR)
    .refine((value) => value !== 'default', { message: DEPARTMENT_ERROR }),
  clubPatron: z.string().min(1, CLUB_PATRON_ERROR),
  fullName: z.string().min(1, FULL_NAME_ERROR),
  indexNumber: z.string().min(1, INDEX_NUMBER_ERROR),
  role: z.string().min(1, ROLE_ERROR),
  period: z
    .string()
    .min(1, PERIOD_ERROR)
    .refine(
      (period) => period === WINTER_PERIOD || period === SUMMER_PERIOD,
      "Semestr musi mieć wartość: 'zimowy' lub 'letni'",
    ),
});

export type SchemaType = z.TypeOf<typeof schema>;

type InputNames = keyof SchemaType;

const years = ['2021/2022', '2022/2023', '2023/2024', '2024/2025'];

export const Form = ({ departments, scienceClubs }: Props) => {
  const [savedValues, setSavedValues, removeSavedValues] = useLocalStorage('savedValues', {});
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<SchemaType>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });

  useEffect(() => {
    if (savedValues === undefined) return;
    for (const [name, value] of Object.entries(savedValues)) {
      if (typeof value !== 'string') continue;
      setValue(name as InputNames, value);
    }
  }, []);

  useEffect(() => {
    const subscritption = watch((data) => {
      setSavedValues(data);
    });
    return () => subscritption.unsubscribe();
  }, [watch, setSavedValues]);

  const onHandleSubmit: SubmitHandler<SchemaType> = async (data) => {
    console.log(data.leaderName);
  };

  return (
    <div className={styles.formBox}>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
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
            <FieldSelect
              defaultValue='default'
              {...register('scienceClub')}
              options={scienceClubs}
            />
          </GeneralInput>
          <GeneralInput
            errorMessage={DEPARTMENT_ERROR}
            error={errors.department?.message}
            label='Nazwa wydziału:'
          >
            <FieldSelect defaultValue='default' {...register('department')} options={departments} />
          </GeneralInput>
          <GeneralInput
            errorMessage={CLUB_PATRON_ERROR}
            error={errors.clubPatron?.message}
            label='Opiekun koła (wraz z tytułem/tytułami):'
          >
            <FieldInput {...register('clubPatron')} />
          </GeneralInput>
        </section>
        <section className={styles.formSection}>
          <h2 className={styles.header}>Dane indywidualne</h2>
          <GeneralInput
            errorMessage={FULL_NAME_ERROR}
            error={errors.fullName?.message}
            label='Imię i nazwisko: '
          >
            <FieldInput {...register('fullName')} />
          </GeneralInput>
          <GeneralInput
            errorMessage={INDEX_NUMBER_ERROR}
            error={errors.indexNumber?.message}
            label='Indeks'
          >
            <FieldInput {...register('indexNumber')} />
          </GeneralInput>
          <GeneralInput
            errorMessage={ROLE_ERROR}
            error={errors.role?.message}
            label='Funkcja w kole'
          >
            <FieldInput {...register('role')} />
          </GeneralInput>
          <div className={styles.selectBox}>
            <GeneralInput label='Rok:'>
              <FieldSelect options={years} />
            </GeneralInput>
            <GeneralInput label='Semestr:'>
              <FieldSelect options={[WINTER_PERIOD, SUMMER_PERIOD]} />
            </GeneralInput>
          </div>
        </section>

        <button
          type='button'
          onClick={() => {
            reset();
            removeSavedValues();
          }}
        >
          Wyczyść formularz
        </button>
        <button type='submit'>Generuj wniosek</button>
      </form>
    </div>
  );
};
