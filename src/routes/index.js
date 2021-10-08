import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import { MyPage } from '../views/MyPage';
import { useDispatch, useSelector } from 'react-redux';

import Loading from '../components/Loading';
function Routes() {
  const { loading } = useSelector((state) => state.musicList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_LIST_MUSIC' });
  }, [dispatch]);

  if (loading) return <Loading />;
  return (
    <main className='main-content'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/myfavorites' component={MyPage} />
      </Switch>
    </main>
  );
}

export default Routes;
