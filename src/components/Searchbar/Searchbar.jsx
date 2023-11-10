import css from "./Searchbar.module.css"
export const Searchbar = ({onSubmit}) => {
    return (<header className={css.searchbar}>
    <form className={css.form} onSubmit={onSubmit}>
    <input
      name="text"
        className={css.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
      <button type="submit" className={css.button}>
        <span className={css.label}>Search</span>
      </button>
  
      
    </form>
  </header>)

}