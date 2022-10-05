import styles from '../Form.module.scss';

interface InnerProps {
  type: 'submit' | 'button';
  onClick?: () => void;
  children: string;
  classes: string;
}

const Inner = ({ type, onClick, children, classes }: InnerProps) => {
  return (
    <button className={classes} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

interface Props {
  onClick?: () => void;
  isSubmit?: boolean;
  isDark?: boolean;
  children: string;
}

export const Button = ({ children, isSubmit, isDark, onClick }: Props) => {
  const classes = [styles.genericInput, isDark ? styles.darkButton : ''].join(' ');
  return isSubmit ? (
    <Inner classes={classes} type='submit'>
      {children}
    </Inner>
  ) : (
    <Inner classes={classes} type='button' onClick={onClick}>
      {children}
    </Inner>
  );
};
