import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import searchIcon from '../../assets/iconsearch.svg';
import { setCheckBox } from '../../store/reduxtoolkit/data';

import { Container, InputWrapper, SelectWrapper } from './styles';

export function Search() {
  const { searchState } = useSelector((state) => state.musicList);
  const [selectCheckbox, setSelectCheckbox] = useState(searchState);

  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  function handleSetFilterMusic(e) {
    e.preventDefault();
    dispatch({
      type: 'SET_SEARCH_MUSIC',
      selectCheckbox: selectCheckbox,
      textSearch: inputValue,
    });
    dispatch(setCheckBox(selectCheckbox));
  }

  return (
    <Container>
      <InputWrapper onSubmit={handleSetFilterMusic}>
        <img
          src={searchIcon}
          alt='area de pesquisa'
          onClick={handleSetFilterMusic}
        />
        <input
          type='text'
          placeholder='pesquisar'
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
      </InputWrapper>
      <SelectWrapper>
        <div>
          <input
            type='radio'
            value='album'
            id='album'
            onChange={() => {
              setSelectCheckbox('album');
            }}
            checked={selectCheckbox === 'album'}
          />
          <label htmlFor='album'>Álbum</label>
        </div>
        <div>
          <input
            type='radio'
            value='artist'
            id='artist'
            onChange={() => {
              setSelectCheckbox('artist');
            }}
            checked={selectCheckbox === 'artist'}
          />
          <label htmlFor='artist'>Artista</label>
        </div>
        <div>
          <input
            type='radio'
            value='track'
            id='track'
            onChange={() => {
              setSelectCheckbox('track');
            }}
            checked={selectCheckbox === 'track'}
          />
          <label htmlFor='track'>Music</label>
        </div>
      </SelectWrapper>
    </Container>
  );
}
