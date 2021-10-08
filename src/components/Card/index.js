import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  Container,
  ImageWrapper,
  ExtendedButton,
  ContentWrapper,
  PlayWrapper,
  TitleWrapper,
  FavoritesWrapper,
} from './styles';
import { Play } from '../ButtonPlayer/Play/index';
import { Pause } from '../ButtonPlayer/Pause';
import { FavoriteButton } from '../ButtonPlayer/Favorite';
import { addToFavorite } from '../../store/reduxtoolkit/favoriteList';
import { setListOnFavorite } from '../../store/reduxtoolkit/data';

export function Card({ item, audioId }) {
  const [playing, setPlaying] = useState(false);
  const { list } = useSelector((state) => state.musicList);
  const timeMusic = (item.duration / 60).toFixed(2).replace('.', ':');
  const dispatch = useDispatch();

  useEffect(() => {
    if (item.preview) {
      const audio = document.getElementById(audioId);
      playing ? audio.play() : audio.pause();
    } else {
      return null;
    }
  }, [playing, audioId, item]);

  function PlayAudio() {
    setPlaying(true);
  }

  function PauseAudio() {
    setPlaying(false);
  }

  function handleSetFavoriteMusic(id) {
    const changeBoo = list.map((item) => {
      if (item.id === id) {
        return { ...item, favorite: !item.favorite };
      }
      return item;
    });
    const items = changeBoo.filter((item) => item.favorite === true);
    dispatch(addToFavorite(items));
    dispatch(setListOnFavorite(changeBoo));
  }
  if (item.type === 'artist') {
    return (
      <Container>
        <ImageWrapper>
          <img src={item.picture_medium} alt={item.name} />
        </ImageWrapper>
        <ContentWrapper>
          <TitleWrapper>
            <div>
              <h3>{item.name}</h3>
              <p>{item.type}</p>
            </div>
          </TitleWrapper>
          <FavoritesWrapper>
            <FavoriteButton
              favorite={item.favorite}
              handleClick={() => handleSetFavoriteMusic(item.id)}
            />
          </FavoritesWrapper>
        </ContentWrapper>
        <ExtendedButton link={item.link} />
      </Container>
    );
  }
  if (item.type === 'track') {
    return (
      <Container>
        <ImageWrapper>
          <img src={item.artist.picture_medium} alt={item.artist.name} />
        </ImageWrapper>
        <ContentWrapper>
          <PlayWrapper>
            <audio id={audioId}>
              <source src={item.preview} />
              Your browser does not support the <code>audio</code> element.
            </audio>
            {playing ? (
              <Pause handleClick={() => PauseAudio()} />
            ) : (
              <Play handleClick={() => PlayAudio()} />
            )}
            <p>{timeMusic}</p>
          </PlayWrapper>
          <TitleWrapper>
            <div>
              <h3>{item.title}</h3>
              <p>{item.artist.name}</p>
            </div>
          </TitleWrapper>
          <FavoritesWrapper>
            <FavoriteButton
              favorite={item.favorite}
              handleClick={() => handleSetFavoriteMusic(item.id)}
            />
          </FavoritesWrapper>
        </ContentWrapper>
        <ExtendedButton link={item.link} />
      </Container>
    );
  }
  if (item.type === 'album') {
    return (
      <Container>
        <ImageWrapper>
          <img src={item.cover_medium} alt={item.title} />
        </ImageWrapper>
        <ContentWrapper>
          <TitleWrapper>
            <div>
              <h3>{item.title}</h3>
              <p>{item.title}</p>
            </div>
          </TitleWrapper>
          <FavoritesWrapper>
            <FavoriteButton
              favorite={item.favorite}
              handleClick={() => handleSetFavoriteMusic(item.id)}
            />
          </FavoritesWrapper>
        </ContentWrapper>
        <ExtendedButton link={item.link} />
      </Container>
    );
  }
  return null;
}
