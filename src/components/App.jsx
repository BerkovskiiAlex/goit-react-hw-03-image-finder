import React from 'react';

import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImg } from '../service/api';

export class App extends React.Component {
  state = {
    q: 'cat',
    page: 1,
    images: [],
  };

  async componentDidMount() {
    const { q, page } = this.state;
    try {
      const images = await fetchImg({
        q,
        page,
      });

      this.setState({ images });
      console.log(this.state);
    } catch (error) {}
  }

  render() {
    return (
      <section>
        <Searchbar />
        <ImageGallery />
        <ImageGalleryItem />
        <Loader />
        <Button />
        <Modal />
      </section>
    );
  }
}

// .App {
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-gap: 16px;
//   padding-bottom: 24px;
// }
