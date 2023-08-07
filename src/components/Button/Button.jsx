import React from 'react';
import { ButtonStyled } from './Button.styled';

export const Button = ({ onLoadMoreClick, disabled }) =>
  disabled ? null : (
    <ButtonStyled onClick={onLoadMoreClick}>Load More</ButtonStyled>
  );
