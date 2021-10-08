import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 5px;
  gap: 90px;
`;

export const NavLink = styled.nav`
  width: 100%;
  display: flex;

  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media ${({ theme }) => theme.media.break768} {
    flex-direction: column;
  }

  a {
    color: #fff;
    text-decoration: none;
    margin-left: 24px;
    cursor: pointer;
    font-weight: bold;
    font-size: 24px;
    @media ${({ theme }) => theme.media.break768} {
      flex-direction: column;
      margin: 0;
    }

    &:first-child {
      margin: 0;
    }
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
