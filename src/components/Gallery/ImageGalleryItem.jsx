import {GalleryItem,GalleryImage} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({img}) => {
    console.log(img); 
    return (
        <GalleryItem>
            <GalleryImage src={img.webformatURL} alt="oops" />
        </GalleryItem>
    );
};