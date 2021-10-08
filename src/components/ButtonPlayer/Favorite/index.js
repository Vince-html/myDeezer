import React from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { ButtonFavorite } from '../Pause/styles';

export function FavoriteButton({ handleClick, favorite }) {
  return (
    <ButtonFavorite favorite={favorite} onClick={() => handleClick()}>
      {favorite ? <AiFillHeart /> : <AiOutlineHeart />}
    </ButtonFavorite>
  );
}
