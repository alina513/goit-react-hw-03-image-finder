import css from "./ImageGallery.module.css"
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
export const ImageGallery = ({images}) => {
    return (
        <ul className={css.gallery}>{images.map(image=><ImageGalleryItem image={image} key={image.id}/>)}
        
</ul>
    )
}