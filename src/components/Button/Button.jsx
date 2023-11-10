import css from './Button.module.css';
export const Button = ({ onButton }) => (
  <div className={css.container}>
    <button className={css.button} onClick={onButton}>
      Load more
    </button>
  </div>
);
