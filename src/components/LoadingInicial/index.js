import React, { useEffect, useState } from 'react';
import { Container, Wrapper } from './styles';

export function LoadingInicial() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    function updateStep() {
      setStep((step) => {
        if (step < 2) {
          return step + 1;
        } else return 0;
      });
    }
    const interval = setInterval(updateStep, 500);
    return () => {
      clearInterval(interval);
    };
  }, []);

  function displayStep(i) {
    return {
      display: step === i ? 'block' : 'none',
    };
  }

  return (
    <Container>
      <Wrapper>
        <svg
          width='78'
          height='47'
          viewBox='0 0 78 47'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g style={displayStep(0)}>
            <rect y='18' width='14' height='5' fill='white' />
            <rect x='64' y='18' width='14' height='5' fill='white' />
            <rect x='48' y='18' width='14' height='5' fill='white' />
            <rect x='32' y='18' width='14' height='5' fill='white' />
            <rect x='16' y='30' width='14' height='5' fill='white' />
            <rect x='64' width='14' height='5' fill='white' />
            <rect x='32' y='6' width='14' height='5' fill='white' />
            <rect y='24' width='14' height='5' fill='white' />
            <rect x='64' y='24' width='14' height='5' fill='white' />
            <rect x='48' y='24' width='14' height='5' fill='white' />
            <rect x='32' y='24' width='14' height='5' fill='white' />
            <rect x='16' y='36' width='14' height='5' fill='white' />
            <rect x='64' y='6' width='14' height='5' fill='white' />
            <rect x='32' y='12' width='14' height='5' fill='white' />
            <rect y='30' width='14' height='5' fill='white' />
            <rect x='64' y='30' width='14' height='5' fill='white' />
            <rect x='48' y='30' width='14' height='5' fill='white' />
            <rect x='32' y='30' width='14' height='5' fill='white' />
            <rect x='16' y='42' width='14' height='5' fill='white' />
            <rect x='64' y='12' width='14' height='5' fill='white' />
            <rect y='36' width='14' height='5' fill='white' />
            <rect x='64' y='36' width='14' height='5' fill='white' />
            <rect x='48' y='36' width='14' height='5' fill='white' />
            <rect x='32' y='36' width='14' height='5' fill='white' />
            <rect y='42' width='14' height='5' fill='white' />
            <rect x='64' y='42' width='14' height='5' fill='white' />
            <rect x='48' y='42' width='14' height='5' fill='white' />
            <rect x='32' y='42' width='14' height='5' fill='white' />
          </g>
          <g style={displayStep(1)}>
            <rect x='32' y='18' width='14' height='5' fill='white' />
            <rect x='16' y='18' width='14' height='5' fill='white' />
            <rect y='18' width='14' height='5' fill='white' />
            <rect x='64' y='18' width='14' height='5' fill='white' />
            <rect x='48' y='30' width='14' height='5' fill='white' />
            <rect x='16' width='14' height='5' fill='white' />
            <rect x='64' y='6' width='14' height='5' fill='white' />
            <rect x='32' y='24' width='14' height='5' fill='white' />
            <rect x='16' y='24' width='14' height='5' fill='white' />
            <rect y='24' width='14' height='5' fill='white' />
            <rect x='64' y='24' width='14' height='5' fill='white' />
            <rect x='48' y='36' width='14' height='5' fill='white' />
            <rect x='16' y='6' width='14' height='5' fill='white' />
            <rect x='64' y='12' width='14' height='5' fill='white' />
            <rect x='32' y='30' width='14' height='5' fill='white' />
            <rect x='16' y='30' width='14' height='5' fill='white' />
            <rect y='30' width='14' height='5' fill='white' />
            <rect x='64' y='30' width='14' height='5' fill='white' />
            <rect x='48' y='42' width='14' height='5' fill='white' />
            <rect x='16' y='12' width='14' height='5' fill='white' />
            <rect x='32' y='36' width='14' height='5' fill='white' />
            <rect x='16' y='36' width='14' height='5' fill='white' />
            <rect y='36' width='14' height='5' fill='white' />
            <rect x='64' y='36' width='14' height='5' fill='white' />
            <rect x='32' y='42' width='14' height='5' fill='white' />
            <rect x='16' y='42' width='14' height='5' fill='white' />
            <rect y='42' width='14' height='5' fill='white' />
            <rect x='64' y='42' width='14' height='5' fill='white' />
          </g>
          <g style={displayStep(2)}>
            <rect x='16' y='18' width='14' height='5' fill='white' />
            <rect x='64' y='18' width='14' height='5' fill='white' />
            <rect x='32' y='18' width='14' height='5' fill='white' />
            <rect x='48' y='18' width='14' height='5' fill='white' />
            <rect x='80' y='18' width='14' height='5' fill='white' />
            <rect x='32' y='30' width='14' height='5' fill='white' />
            <rect y='30' width='14' height='5' fill='white' />
            <rect x='64' width='14' height='5' fill='white' />
            <rect x='32' width='14' height='5' fill='white' />
            <rect x='80' y='6' width='14' height='5' fill='white' />
            <rect x='16' y='24' width='14' height='5' fill='white' />
            <rect x='64' y='24' width='14' height='5' fill='white' />
            <rect x='32' y='24' width='14' height='5' fill='white' />
            <rect x='48' y='24' width='14' height='5' fill='white' />
            <rect x='80' y='24' width='14' height='5' fill='white' />
            <rect x='32' y='36' width='14' height='5' fill='white' />
            <rect y='36' width='14' height='5' fill='white' />
            <rect x='64' y='6' width='14' height='5' fill='white' />
            <rect x='32' y='6' width='14' height='5' fill='white' />
            <rect x='80' y='12' width='14' height='5' fill='white' />
            <rect x='16' y='30' width='14' height='5' fill='white' />
            <rect x='64' y='30' width='14' height='5' fill='white' />
            <rect x='32' y='30' width='14' height='5' fill='white' />
            <rect x='48' y='30' width='14' height='5' fill='white' />
            <rect x='80' y='30' width='14' height='5' fill='white' />
            <rect x='32' y='42' width='14' height='5' fill='white' />
            <rect y='42' width='14' height='5' fill='white' />
            <rect x='64' y='12' width='14' height='5' fill='white' />
            <rect x='32' y='12' width='14' height='5' fill='white' />
            <rect x='16' y='36' width='14' height='5' fill='white' />
            <rect x='64' y='36' width='14' height='5' fill='white' />
            <rect x='32' y='36' width='14' height='5' fill='white' />
            <rect x='48' y='36' width='14' height='5' fill='white' />
            <rect x='80' y='36' width='14' height='5' fill='white' />
            <rect x='16' y='42' width='14' height='5' fill='white' />
            <rect x='64' y='42' width='14' height='5' fill='white' />
            <rect x='32' y='42' width='14' height='5' fill='white' />
            <rect x='48' y='42' width='14' height='5' fill='white' />
            <rect x='80' y='42' width='14' height='5' fill='white' />
          </g>
        </svg>
      </Wrapper>
    </Container>
  );
}
