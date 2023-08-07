import React from 'react';

export const ImageGalleryItem = ({ images }) => {
  console.log(images);
  return (
    <>
      {images.map(img => (
        <li
          className="gallery-item"
          key={img.id}
          style={{ width: img.webformatWidth, height: img.webformatHeight }}
        >
          <img src={img.webformatURL} alt={img.largeImageURL} />
        </li>
      ))}
    </>
  );
};

// .ImageGalleryItem {
//   border-radius: 2px;
//   box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
//     0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
// }

// .ImageGalleryItem-image {
//   width: 100%;
//   height: 260px;
//   object-fit: cover;
//   transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
// }

// .ImageGalleryItem-image:hover {
//   transform: scale(1.03);
//   cursor: zoom-in;
// }
