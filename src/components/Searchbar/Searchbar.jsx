import css from "./Searchbar.module.css"
export const Searchbar = ({onSubmit}) => {
  const handleSubmit = event => {
    event.preventDefault();
    if(event.target.elements.text.value === "") {
      alert('Write something');
      
      return
    }
    onSubmit(event.target.elements.text.value);
    event.target.reset();
  }

    return (<header className={css.searchbar}>
    <form className={css.form} onSubmit={handleSubmit}>
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