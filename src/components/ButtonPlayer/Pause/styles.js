import styled from 'styled-components';

export const ButtonPlayer = styled.button`
  background: none;
  width: 100%;
  border: none;
  svg {
    width: 30px;
    height: 30px;
    color: white;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const ButtonFavorite = styled.button`
  background: none;
  width: 100%;
  border: none;
  svg {
    width: 30px;
    height: 30px;

    border-radius: 50%;

    color: ${({ favorite, theme }) =>
      favorite ? theme.colors.secondary : '#fff'};
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }

    @media ${({ theme }) => theme.media.break540} {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
`;
