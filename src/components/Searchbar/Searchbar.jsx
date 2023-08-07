import React from 'react';
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
          <SearchFormButtonLabelStyled>Search</SearchFormButtonLabelStyled>
        </SearchFormButtonStyled>

        <SearchFormInputStyled
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
        />
      </SearchFormStyled>
    </SearchbarStyled>
  );
};
