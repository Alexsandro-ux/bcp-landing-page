import style from './Button.module.css';

export function Button({ label, onClick , variant='primary'}) {
  return (
    <button className={`${style.button} ${style[variant]}`}onClick={onClick}>
      {label}
    </button>
  );
}