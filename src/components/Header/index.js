import React from 'react';
import {
  Container,
  LogoWrapper,
  SearchWrapper,
  MenuWrapper,
  IconsWrapper,
} from './styles';
import Logo from '../../assets/logo.svg';
import { Menu } from './Menu';
import { Search } from '../Search';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { setOpenMenu } from '../../store/reduxtoolkit/data';

export function Header() {
  const { openMenu } = useSelector((state) => state.musicList);
  const dispatch = useDispatch();

  function handleCloseOpenMenu() {
    dispatch(setOpenMenu(!openMenu));
  }

  return (
    <>
      <Container open={openMenu}>
        <LogoWrapper>
          <img src={Logo} alt='Logo MyDeezer' />
        </LogoWrapper>
        <SearchWrapper open={openMenu}>
          <Search />
        </SearchWrapper>

        <MenuWrapper open={openMenu}>
          <Menu />
        </MenuWrapper>
        <IconsWrapper onClick={() => handleCloseOpenMenu()} open={openMenu}>
          {!openMenu ? <AiOutlineMenu /> : <AiOutlineClose />}
        </IconsWrapper>
      </Container>
    </>
  );
}
