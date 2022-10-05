import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import styles from './Form.module.scss';
import { INITIAL_ACTION_VALUES, INITIAL_INPUT_VALUES, InputNames, SchemaType } from 'utils';
import { useEffect } from 'react';
import { useLocalStorage } from 'react-use';
import { schema } from '../../utils/schema';
import { ScienceClubInfo } from './ScienceClubInfo';
import { PersonalInfo } from './PersonalInfo';
import { FormButtons } from './FormButtons';

interface Props {
  departments: string[];
  scienceClubs: string[];
}

export const Form = ({ departments, scienceClubs }: Props) => {
  const [savedValues, setSavedValues, removeSavedValues] = useLocalStorage<SchemaType>(
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

  const { fields, append, remove } = useFieldArray({ control, name: 'activities' });

  // Retrieve saved values from local storage
  useEffect(() => {
    if (savedValues === undefined) return;
    for (const [name, value] of Object.entries(savedValues)) {
      if (typeof value !== 'string') continue;
      // fixes infinite rerenders
      if (value === savedValues[name as InputNames]) continue;
      setValue(name as InputNames, value);
    }
  }, [savedValues, setValue]);

  // Saves changes to local storage
  useEffect(() => {
    const subscription = watch((data) => {
      setSavedValues(data as SchemaType);
    });
    return () => subscription.unsubscribe();
  }, [watch, setSavedValues]);

  const onHandleSubmit: SubmitHandler<SchemaType> = async (data) => {
    console.log(data);
  };

  const resetForm = () => {
    reset(INITIAL_INPUT_VALUES);
    removeSavedValues();
  };

  return (
    <div className={styles.formBox}>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <ScienceClubInfo
          scienceClubs={scienceClubs}
          departments={departments}
          errors={errors}
          register={register}
        />
        <PersonalInfo onRemove={remove} fields={fields} errors={errors} register={register} />

        <FormButtons onAddActivity={() => append(INITIAL_ACTION_VALUES)} onClearForm={resetForm} />
      </form>
    </div>
  );
};
