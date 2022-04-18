import {GalleryItem,GalleryImage} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({img}) => {
    return (
        <GalleryItem>
            <GalleryImage src={img} alt="oops" />
        </GalleryItem>
    );
};