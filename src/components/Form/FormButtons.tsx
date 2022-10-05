import { Button } from './Inputs/Button';
import styles from './Form.module.scss';
interface Props {
  onAddActivity: () => void;
  onClearForm: () => void;
}

export const FormButtons = ({ onClearForm, onAddActivity }: Props) => {
  return (
    <div className={styles.formButtons}>
      <div className={styles.formButtons}>
        <Button isSubmit>Generuj wniosek</Button>
        <Button onClick={onClearForm} isDark>
          Wyczyść formularz
        </Button>
      </div>
      <Button onClick={onAddActivity}>Dodaj działanie</Button>
    </div>
  );
};
