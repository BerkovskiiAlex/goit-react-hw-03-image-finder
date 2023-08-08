import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../images/211818_search_icon.svg';
import {
  SearchbarStyled,
  SearchFormStyled,
  SearchFormButtonStyled,
  SearchFormButtonLabelStyled,
  SearchFormInputStyled,
} from './Searchbar.styled';

export const Searchbar = ({ onSetSearch }) => {
  const onSubmit = e => {
    e.preventDefault();
    const query = e.target.query.value;
    onSetSearch(query);
    e.target.query.value = '';
  };
  return (
    <SearchbarStyled>
      <SearchFormStyled onSubmit={onSubmit}>
        <SearchFormButtonStyled type="submit">
          <SearchFormButtonLabelStyled>{logo}</SearchFormButtonLabelStyled>
        </SearchFormButtonStyled>

        <SearchFormInputStyled
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
        />
      </SearchFormStyled>
      {/* <div>{logo}</div> */}
    </SearchbarStyled>
  );
};

Searchbar.propTypes = {
  onSetSearch: PropTypes.func.isRequired,
};
