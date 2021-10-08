import styled, { keyframes } from 'styled-components';

const rotate = () => keyframes`
 0%{
   transform:  rotate(0deg);
 }
 100%{
   transform:  rotate(360deg);    
 }
`;

export const Container = styled.div``;

export const SectionCard = styled.section`
  width: 100%;
  margin-top: 10rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(400px, 500px));
  gap: 20px;

  @media ${({ theme }) => theme.media.break1300} {
    grid-template-columns: repeat(2, minmax(400px, 500px));
  }
  @media ${({ theme }) => theme.media.break768} {
    grid-template-columns: 1fr;
  }
`;

export const SmallLoading = styled.span`
  height: 35px;
  width: 35px;
  display: ${({ loadingList }) => (loadingList ? 'flex' : 'none')};
  border-radius: 50%;
  border: 4px solid white;
  border-color: ${({ theme }) => theme.colors.background}
    ${({ theme }) => theme.colors.secondary};
  margin-top: 3rem;

  animation: ${rotate()} 1.5s linear infinite;
`;
