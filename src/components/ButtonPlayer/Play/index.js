import React from 'react';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { ButtonPlayer } from '../Pause/styles';

export function Play({ handleClick }) {
  return (
    <ButtonPlayer onClick={() => handleClick()}>
      <AiOutlinePlayCircle />
    </ButtonPlayer>
  );
}
