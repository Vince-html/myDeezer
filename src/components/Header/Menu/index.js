import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setOpenMenu } from '../../../store/reduxtoolkit/data';
import { Container, NavLink } from './styles';

export function Menu() {
  const { openMenu } = useSelector((state) => state.musicList);
  const dispatch = useDispatch();

  function handleCloseOpenMenu() {
    dispatch(setOpenMenu(!openMenu));
  }

  return (
    <Container>
      <NavLink>
        <Link to='/' onClick={handleCloseOpenMenu}>
          Home
        </Link>
        <Link to='/myfavorites' onClick={handleCloseOpenMenu}>
          Minha lista
        </Link>
      </NavLink>
    </Container>
  );
}
