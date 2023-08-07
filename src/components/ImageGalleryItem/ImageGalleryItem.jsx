import {
  ImageGalleryItemImageStyled,
  ImageGalleryItemStyled,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ images, onClick }) => {
  return (
    <>
      {images.map((img, index) => (
        <ImageGalleryItemStyled
          className="gallery-item"
          key={img.id}
          onClick={() => onClick(index)}
        >
          <ImageGalleryItemImageStyled
            src={img.webformatURL}
            alt={img.largeImageURL}
          />
        </ImageGalleryItemStyled>
      ))}
    </>
  );
};
