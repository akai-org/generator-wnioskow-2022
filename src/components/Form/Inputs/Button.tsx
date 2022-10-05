import styles from '../Form.module.scss';

interface InnerProps {
  type: 'submit' | 'button';
  onClick?: () => void;
  children: string;
}

const Inner = ({ type, onClick, children }: InnerProps) => {
  return (
    <button className={styles.genericInput} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

interface Props {
  onClick?: () => void;
  isSubmit?: boolean;
  children: string;
}

export const Button = ({ children, isSubmit, onClick }: Props) => {
  return isSubmit ? (
    <Inner type='submit'>{children}</Inner>
  ) : (
    <Inner type='button' onClick={onClick}>
      {children}
    </Inner>
  );
};
