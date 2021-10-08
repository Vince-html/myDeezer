import styled from 'styled-components';

export const Container = styled.div``;

export const InputWrapper = styled.form`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  input {
    width: 320px;
    border: none;
    min-height: 30px;
    border-radius: 10px;

    padding: 10px;

    &:focus {
      outline: none;

      box-shadow: 0 0 5px ${({ theme }) => theme.colors.secondary};
    }
  }

  img {
    margin-right: 5px;
    position: absolute;
    cursor: pointer;
  }
`;

export const SelectWrapper = styled.div`
  margin-top: 0.5rem;
  display: flex;

  align-items: center;

  input[type='radio'] {
    width: 0.75rem;
    height: 0.75rem;
    background-color: white;
    border-radius: 50%;

    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
    margin-right: 5px;
  }
  input[type='radio']:checked {
    background: ${({ theme }) => theme.colors.secondary} -19px top no-repeat;
    outline: none;
  }
  [type='radio']:checked + label {
    color: ${({ theme }) => theme.colors.secondary};
  }

  label {
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }

    @media ${({ theme }) => theme.media.break768} {
      width: 0;
      height: 0;
    }
  }
`;
