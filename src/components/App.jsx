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
    per_page: 12,
    images: [],
    disabled: false,
  };

  async componentDidMount() {
    const { q, page, per_page } = this.state;
    try {
      const data = await fetchImg({
        q,
        page,
        per_page,
      });
      if (data.totalHits > this.state.images.length) {
        this.setState({ disabled: false });
      } else {
        this.setState({ disabled: true });
      }

      console.log(this.state.disabled);
      const { hits } = data;
      this.setState({ images: hits });
    } catch (error) {}
  }

  async componentDidUpdate(prevProps, prevState) {
    const { q, page, per_page } = this.state;
    if (q === '') {
      return;
    }
    if (prevState.q !== q) {
      try {
        this.setState({ per_page: 12 });
        const data = await fetchImg({
          q,
          page,
          per_page,
        });
        if (data.totalHits > this.state.images.length) {
          this.setState({ disabled: false });
        } else {
          this.setState({ disabled: true });
        }

        const { hits } = data;
        this.setState({ images: hits });
      } catch (error) {
        console.log(error);
      }
    }
    if (prevState.per_page !== per_page) {
      try {
        const data = await fetchImg({
          q,
          page,
          per_page,
        });
        if (data.totalHits > this.state.images.length) {
          this.setState({ disabled: false });
        } else {
          this.setState({ disabled: true });
        }

        const { hits } = data;
        this.setState({ images: hits });
      } catch (error) {
        console.log(error);
      }
    }
  }

  handleSetSearch = query => {
    this.setState({ q: query });
  };

  handleLoadMore = () => {
    this.setState(prev => ({ per_page: (prev.per_page += 12) }));
    console.log(this.state.per_page);
  };

  render() {
    return (
      <section>
        <Searchbar onSetSearch={this.handleSetSearch} />
        <ImageGallery>
          <ImageGalleryItem images={this.state.images} />
        </ImageGallery>
        <Loader />
        <Button
          onLoadMoreClick={this.handleLoadMore}
          disabled={this.state.disabled}
        />
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
