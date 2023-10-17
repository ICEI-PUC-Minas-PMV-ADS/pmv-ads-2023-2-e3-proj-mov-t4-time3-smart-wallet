import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UserProvider from './context/UserContext';
import Route from './navigations/Route';
//import Login from './pages/Login';
import MyPage from './pages/MyPage';


const App = () => {
  return (
    <MyPage />
    // <UserProvider>
    //   <NavigationContainer>
    //     <Route />
    //   </NavigationContainer>
    // </UserProvider>
  );
};

export default App;
