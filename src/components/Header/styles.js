import styled from 'styled-components';

export const Container = styled.div`
  height: 90px;
  position: fixed;

  padding: 0 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  transition: all 500ms ease-in-out;

  background: ${({ theme }) => theme.colors.background};

  filter: drop-shadow(0 2px 2px #f98600);

  @media ${({ theme }) => theme.media.break768} {
    height: ${({ open }) => (open ? '100vh' : '90px')};
    padding: 0px;
    justify-content: ${({ open }) => (open ? 'center' : 'space-between')};
    flex-direction: ${({ open }) => (open ? 'column' : 'row')};
    gap: 5rem;
  }
`;

export const LogoWrapper = styled.div`
  @media ${({ theme }) => theme.media.break768} {
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media ${({ theme }) => theme.media.break768} {
    display: ${({ open }) => (open ? 'flex' : 'none')};
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${({ theme }) => theme.media.break768} {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
  }
`;

export const IconsWrapper = styled.div`
  display: none;
  svg {
    width: 50px;
    height: 50px;
  }

  @media ${({ theme }) => theme.media.break768} {
    display: block;
    position: ${({ open }) => (open ? 'absolute' : 'initial')};
    top: 0;
    right: 0;
  }
`;
