import React from 'react';
import { ImageGalleryStyled } from './ImageGalleryStyled';

export const ImageGallery = ({ children }) => {
  return (
    <ImageGalleryStyled className="gallery">{children}</ImageGalleryStyled>
  );
};
