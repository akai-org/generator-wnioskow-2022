import { FieldInput, FieldSelect, GeneralInput } from './Inputs';

export const Form = () => {
  return (
    <div>
      <form style={{ backgroundColor: '#EEEEEE', width: '800px' }}>
        <h2>Dane koła</h2>
        <GeneralInput label='Przewodniczący koła naukowego: '>
          <FieldInput inputType='text' />
        </GeneralInput>
        <GeneralInput label='Nazwa koła naukowego: '>
          <FieldSelect options={[]} />
        </GeneralInput>
        <GeneralInput label='Nazwa wydziału:'>
          <FieldSelect options={[]} />
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
