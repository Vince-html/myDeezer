import styled from 'styled-components';
import { Button } from '../Button';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  width: 420px;
  height: 120px;
  gap: 10px;

  box-shadow: 2px 2px 2px rgba(219, 128, 15, 0.1);
`;

export const ExtendedButton = styled(Button)`
  grid-area: 2 / 2 / 2 / 4;
  width: 80%;
`;

export const ImageWrapper = styled.div`
  grid-area: 1 / 1 / 3 / 2;

  img {
    width: 90%;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const PlayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 0.75rem;
    margin-top: 3px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-around;

  p {
    font-size: 0.75rem;
  }
`;

export const FavoritesWrapper = styled.div`
  svg {
    width: 30px;
    height: 30px;
    color: ;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
