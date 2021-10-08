import styled from 'styled-components';

export const BtnListener = styled.button`
  padding: 4px 8px;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;

  a {
    font-size: 0.65rem;
    text-decoration: none;
    color: black;

    &:hover {
      color: #fff;
    }
  }

  &:hover {
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.secondary};
  }
`;
