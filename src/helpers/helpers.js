import axios from "axios";
export const fetchImagesWithQuery = async (searchQuery, page) => {
    const response = await axios.get(`https://pixabay.com/api/?key=39636776-fbfac41511b7d2258638a469a&image_type=photo&q=${searchQuery}&orientation=horizontal&safesearch=true&per_page=12&page=${page}`)
const photos= await response.data.hits;
return photos
}