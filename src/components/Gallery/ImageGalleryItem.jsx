import {GalleryItem,GalleryImage} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({img,imgBig,openModal}) => {
    return (
        <GalleryItem>
            <GalleryImage src={img} alt="oops" imgBig={imgBig} onClick={openModal}/>
        </GalleryItem>
    );
};