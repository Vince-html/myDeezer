import React from 'react';
import { Link } from 'react-router-dom';
import { Container, NavLink } from './styles';

export function Menu() {
  return (
    <Container>
      <NavLink>
        <Link to='/'>Home</Link>
        <Link to='/myfavorites'>Minha lista</Link>
      </NavLink>
    </Container>
  );
}
