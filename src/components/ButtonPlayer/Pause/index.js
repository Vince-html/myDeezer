import React from 'react';
import { AiOutlinePauseCircle } from 'react-icons/ai';
import { ButtonPlayer } from './styles';

export function Pause({ handleClick }) {
  return (
    <ButtonPlayer onClick={() => handleClick()}>
      <AiOutlinePauseCircle />
    </ButtonPlayer>
  );
}
