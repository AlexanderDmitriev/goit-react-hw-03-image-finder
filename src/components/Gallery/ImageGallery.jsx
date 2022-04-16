import styled from '@emotion/styled';
import {Button} from '../Button'
import {ImageGalleryItem} from './ImageGalleryItem';

const ImageGallery = () => {
    return (
        <>
            <ImageGalleryList>
                <ImageGalleryItem/>
                <ImageGalleryItem/>
                <ImageGalleryItem/>
                <ImageGalleryItem/>
            </ImageGalleryList>
            <Button/>
        </>
        
        
    );
}

const ImageGalleryList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: ${props => props.theme.spacing(4)};
  margin: 0 auto;
  padding: 0;
  list-style: none;
`;

export default ImageGallery;