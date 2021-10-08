import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(
    90deg,
    rgba(5, 21, 33, 1) 0%,
    rgba(12, 37, 55, 1) 100%
  );
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  top: 0px;
  left: 0px;
  z-index: 10000;
`;

export const Wrapper = styled.div`
  margin: auto;
  width: 150px;
  height: 150px;
  display: flex;
  padding-left: 5px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
`;
