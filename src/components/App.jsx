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
    q: '',
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
    } catch (error) {}
  }

  async componentDidUpdate(prevProps, prevState) {
    const { q, page } = this.state;
    if (q === '') {
      return;
    }
    if (prevState.q !== q) {
      try {
        const images = await fetchImg({
          q,
          page,
        });

        this.setState({ images });
      } catch (error) {
        console.log(error);
      }
    }
  }

  handleSetSearch = query => {
    this.setState({ q: query });
  };

  render() {
    return (
      <section>
        <Searchbar onSetSearch={this.handleSetSearch} />
        <ImageGallery>
          <ImageGalleryItem images={this.state.images} />
        </ImageGallery>
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
