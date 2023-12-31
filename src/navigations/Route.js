import React from 'react';

import {useUser} from '../context/UserContext';

import Main from './Main';
import Auth from './Auth';

const Route = () => {

  const {signed} = useUser();

  return (
    <>
    {
      signed 
      ? <Main />
      : <Auth />
    }
    </>
  )
}

export default Route;