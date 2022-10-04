interface Props {
  onAddAction: () => void;
  onClearForm: () => void;
}

export const FormButtons = ({ onClearForm, onAddAction }: Props) => (
  <>
    <button type='button' onClick={onAddAction}>
      Dodaj działanie
    </button>

    <button type='button' onClick={onClearForm}>
      Wyczyść formularz
    </button>
    <button type='submit'>Generuj wniosek</button>
  </>
);
