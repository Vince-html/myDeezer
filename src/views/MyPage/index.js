import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import { Cardlist } from './../../components/CardList/index';

export function MyPage() {
  const { loading } = useSelector((state) => state.musicList);
  const { listFavorites } = useSelector((state) => state.favoriteList);
  console.log(listFavorites);
  if (loading) return <Loading />;

  if (typeof listFavorites === undefined || listFavorites.length === 0) {
    return (
      <h2 style={{ marginTop: '5rem' }}>Ops parece que sua lista está vazia</h2>
    );
  }

  return <Cardlist data={listFavorites} />;
}
