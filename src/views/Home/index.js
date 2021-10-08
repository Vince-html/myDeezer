/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Cardlist } from '../../components/CardList';
import Loading from '../../components/Loading';
import {
  addPage,
  fetchListLoading,
} from '../../store/modules/reduxtoolkit/data';

function Home() {
  const { loading, list, infinite, pages } = useSelector(
    (state) => state.musicList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    let wait = false;
    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * 0.5 && !wait) {
          dispatch(addPage());
          dispatch(fetchListLoading());
          dispatch({
            type: 'MORE_LIST_MUSIC',
            pages,
          });
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 100);
        }
      }
    }

    window.addEventListener('wheel', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);
    return () => {
      window.removeEventListener('wheel', infiniteScroll);
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, [infinite, dispatch, pages]);

  if (loading) return <Loading />;

  if (list === undefined || list.length === 0) {
    return (
      <h2 style={{ marginTop: '5rem' }}>Ops parece que sua lista está vazia</h2>
    );
  }
  if (list) {
    return <Cardlist data={list} />;
  } else return null;
}

export default Home;
