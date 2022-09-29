import { FieldInput, FieldSelect, GeneralInput } from './Inputs';
import styles from './Form.module.scss';

interface Props {
  departments: string[];
  scienceClubs: string[];
}

export const Form = ({ departments, scienceClubs }: Props) => {
  return (
    <div className={styles.formBox}>
      <form>
        <section className={styles.formSection}>
          <h2 className={styles.header}>Dane koła</h2>
          <GeneralInput label='Przewodniczący koła naukowego: '>
            <FieldInput />
          </GeneralInput>
          <GeneralInput label='Nazwa koła naukowego: '>
            <FieldSelect options={scienceClubs} />
          </GeneralInput>
          <GeneralInput label='Nazwa wydziału:'>
            <FieldSelect options={departments} />
          </GeneralInput>
          <GeneralInput label='Opiekun koła (wraz z tytułem/tytułami):'>
            <FieldInput />
          </GeneralInput>
        </section>
        <section className={styles.formSection}>
          <h2 className={styles.header}>Dane indywidualne</h2>
          <GeneralInput label='Imię i nazwisko: '>
            <FieldInput />
          </GeneralInput>
          <GeneralInput label='Indeks:'>
            <FieldInput />
          </GeneralInput>
          <GeneralInput label='Funkcja w kole:'>
            <FieldInput />
          </GeneralInput>
        </section>
      </form>
    </div>
  );
};
