import css from "./Modal.module.css"
export const Modal = ({image, closeModal}) => 
(<div className={css.overlay} onClick={closeModal}>
    <div className={css.modal}>
     <img src={image}></img>   
    </div>
</div>)
