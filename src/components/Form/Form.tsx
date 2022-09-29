import { FieldInput, FieldSelect, GeneralInput } from './Inputs';

interface Props {
  departments: string[];
  scienceClubs: string[];
}

export const Form = ({ departments, scienceClubs }: Props) => {
  return (
    <div>
      <form style={{ backgroundColor: '#EEEEEE', width: '800px' }}>
        <h2>Dane koła</h2>
        <GeneralInput label='Przewodniczący koła naukowego: '>
          <FieldInput inputType='text' />
        </GeneralInput>
        <GeneralInput label='Nazwa koła naukowego: '>
          <FieldSelect options={scienceClubs} />
        </GeneralInput>
        <GeneralInput label='Nazwa wydziału:'>
          <FieldSelect options={departments} />
        </GeneralInput>
        <GeneralInput label='Opiekun koła (wraz z tytułem/tytułami):'>
          <FieldInput inputType='text' />
        </GeneralInput>
        <h2>Dane indywidualne</h2>
        <GeneralInput label='Imię i nazwisko: '>
          <FieldInput inputType='text' />
        </GeneralInput>
        <GeneralInput label='Indeks'>
          <FieldInput inputType='text' />
        </GeneralInput>
        <GeneralInput label='Funkcja w kole'>
          <FieldInput inputType='text' />
        </GeneralInput>
      </form>
    </div>
  );
};
