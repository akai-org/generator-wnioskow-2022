import { Button } from './Inputs/Button';
import styles from './Form.module.scss';
interface Props {
  onAddActivity: () => void;
  onClearForm: () => void;
}

export const FormButtons = ({ onClearForm, onAddActivity }: Props) => {
  return (
    <div className={styles.formButtons}>
      <Button onClick={onAddActivity}>Dodaj działanie</Button>
      <Button onClick={onClearForm}>Wyczyść formularz</Button>
      <Button isSubmit>Generuj wniosek</Button>
    </div>
  );
};
