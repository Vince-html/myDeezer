import React from 'react';
import { BsChevronDoubleDown } from 'react-icons/bs';
import styled from 'styled-components';

const Container = styled.footer`
  width: 100%;
  display: grid;
  margin-top: 3rem;

  svg {
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.secondary};
    width: 30px;
    height: 30px;
  }

  h4 {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default function Footer() {
  return (
    <Container>
      <BsChevronDoubleDown />
      <h4>Feito por Vince</h4>
    </Container>
  );
}
