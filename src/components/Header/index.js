import React, { useState, useEffect, useRef } from 'react';
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

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const node = useRef();

  const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener('mousedown', listener);
      return () => {
        document.removeEventListener('mousedown', listener);
      };
    }, [ref, handler]);
  };
  useOnClickOutside(node, () => setOpenMenu(false));

  return (
    <>
      <Container open={openMenu}>
        <LogoWrapper>
          <img src={Logo} alt='Logo MyDeezer' />
        </LogoWrapper>
        <SearchWrapper ref={node} open={openMenu}>
          <Search ref={node} />
        </SearchWrapper>

        <MenuWrapper open={openMenu}>
          <Menu node={node} />
        </MenuWrapper>
        <IconsWrapper onClick={() => setOpenMenu(!openMenu)} open={openMenu}>
          {!openMenu ? <AiOutlineMenu /> : <AiOutlineClose />}
        </IconsWrapper>
      </Container>
    </>
  );
}
