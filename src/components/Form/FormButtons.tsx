interface Props {
  onAddActivity: () => void;
  onClearForm: () => void;
}

export const FormButtons = ({ onClearForm, onAddActivity }: Props) => (
  <>
    <button type='button' onClick={onAddActivity}>
      Dodaj działanie
    </button>

    <button type='button' onClick={onClearForm}>
      Wyczyść formularz
    </button>
    <button type='submit'>Generuj wniosek</button>
  </>
);
