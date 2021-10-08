import React from 'react';
import { Card } from '../Card';
import { SectionCard, SmallLoading, Container } from './styles';
import { useSelector } from 'react-redux';
import Loading from './../Loading/index';

export function Cardlist({ data }) {
  const { loading, loadingList, openMenu } = useSelector(
    (state) => state.musicList
  );
  if (loading) return <Loading />;

  if (typeof data === undefined) {
    return (
      <h2 style={{ marginTop: '5rem' }}>Ops parece que sua lista está vazia</h2>
    );
  }

  if (data) {
    return (
      <>
        <Container>
          <SectionCard openMenu={openMenu}>
            {data.map((item) => (
              <Card item={item} key={item.id} audioId={item.id} />
            ))}
          </SectionCard>
          <SmallLoading loadingList={loadingList} />
        </Container>
      </>
    );
  } else return null;
}
