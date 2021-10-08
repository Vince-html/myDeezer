import React from 'react';
import { BtnListener } from './styles';

export function Button({ link, ...rest }) {
  return (
    <BtnListener {...rest}>
      <a href={link} target='_blank' rel='noreferrer'>
        Ouça agora no Deezer{' '}
      </a>
    </BtnListener>
  );
}
