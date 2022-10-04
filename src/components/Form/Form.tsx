import { FieldInput, FieldSelect, GeneralInput } from './Inputs';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import styles from './Form.module.scss';
import {
  CLUB_PATRON_ERROR,
  DEPARTMENT_ERROR,
  FULL_NAME_ERROR,
  INDEX_NUMBER_ERROR,
  INITIAL_ACTION_VALUES,
  INITIAL_INPUT_VALUES,
  InputNames,
  LEADER_NAME_ERROR,
  ROLE_ERROR,
  SchemaType,
  SCIENCE_CLUB_ERROR,
  SUMMER_PERIOD,
  WINTER_PERIOD,
} from 'utils';
import { useEffect } from 'react';
import { useLocalStorage } from 'react-use';
import { schema } from '../../utils/schema';
import { FieldsArray } from './FieldsArray/FieldsArray';

interface Props {
  departments: string[];
  scienceClubs: string[];
}

const years = ['2021/2022', '2022/2023', '2023/2024', '2024/2025'];

export const Form = ({ departments, scienceClubs }: Props) => {
  const [savedValues, setSavedValues, removeSavedValues] = useLocalStorage<Partial<SchemaType>>(
    'savedValues',
    INITIAL_INPUT_VALUES,
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
    mode: 'onSubmit',
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

  useEffect(() => {
    if (fields.length === 0) {
      append(INITIAL_ACTION_VALUES);
    }
  }, [append, fields.length]);

  const onHandleSubmit: SubmitHandler<SchemaType> = async (data) => {
    console.log(data.leaderName);
  };

  const resetForm = () => {
    reset();
    removeSavedValues();
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
          <FieldsArray fields={fields} errors={errors} register={register} />
        </section>

        <button type='button' onClick={() => append(INITIAL_ACTION_VALUES)}>
          Dodaj działanie
        </button>

        <button type='button' onClick={resetForm}>
          Wyczyść formularz
        </button>
        <button type='submit'>Generuj wniosek</button>
      </form>
    </div>
  );
};
