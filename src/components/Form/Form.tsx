import { FieldInput, FieldSelect, GeneralInput } from './Inputs';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import styles from './Form.module.scss';
import {
  CLUB_PATRON_ERROR,
  DEPARTMENT_ERROR,
  FULL_NAME_ERROR,
  INDEX_NUMBER_ERROR,
  LEADER_NAME_ERROR,
  NO_DESCRIPTION_ERROR,
  NO_END_DATE_ERROR,
  NO_START_DATE_ERROR,
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
  actions: z
    .object({
      description: z.string().min(1, NO_DESCRIPTION_ERROR),
      startDate: z.string().min(1, NO_START_DATE_ERROR),
      endDate: z.string().min(1, NO_END_DATE_ERROR),
    })
    .array(),
});

export type SchemaType = z.infer<typeof schema>;

type InputNames = keyof SchemaType;

const years = ['2021/2022', '2022/2023', '2023/2024', '2024/2025'];

export const Form = ({ departments, scienceClubs }: Props) => {
  const [savedValues, setSavedValues, removeSavedValues] = useLocalStorage<Partial<SchemaType>>(
    'savedValues',
    {
      scienceClub: '',
      department: '',
      period: '',
      clubPatron: '',
      role: '',
      leaderName: '',
      fullName: '',
      indexNumber: '',
      actions: [],
    },
  );
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    control,
    formState: { errors },
  } = useForm<SchemaType>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
    defaultValues: savedValues,
  });

  const { fields, append } = useFieldArray({ control, name: 'actions' });

  useEffect(() => {
    if (savedValues === undefined) return;
    for (const [name, value] of Object.entries(savedValues)) {
      if (typeof value !== 'string') continue;
      // fixes infinite rerenders
      if (value === savedValues[name as InputNames]) continue;
      setValue(name as InputNames, value);
    }
  }, [savedValues, setValue]);

  useEffect(() => {
    const subscription = watch((data) => {
      // TODO: check why wrong type assumed
      setSavedValues(data as Partial<SchemaType>);
    });
    return () => subscription.unsubscribe();
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
        {fields.map((field, index) => (
          <div key={field.id}>
            <input {...register(`actions.${index}.description`)} />
            {errors.actions?.[index]?.description?.message}
            <input type='date' {...register(`actions.${index}.startDate`)} />
            {errors.actions?.[index]?.startDate?.message}
            <input type='date' {...register(`actions.${index}.endDate`)} />
            {errors.actions?.[index]?.endDate?.message}
          </div>
        ))}
        <button
          type='button'
          onClick={() =>
            append({
              description: '',
              endDate: '',
              startDate: '',
            })
          }
        >
          Dodaj działanie
        </button>

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
