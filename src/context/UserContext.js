import React, { createContext, useState, useContext } from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [signed, setSigned] = useState(false);
  const [name, setName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userId, setUserId] = useState('');

  const logout = () => {
    setSigned(false);
    setUserId('');
    setName('');
    setUserEmail('');
  };

  return (
    <UserContext.Provider
      value={{
        signed,
        setSigned,
        userId,
        setUserId,
        name,
        setName,
        logout,
        userEmail,
        setUserEmail,
      }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  const { signed, setSigned, userId, setUserId, name, setName, userEmail, setUserEmail, logout } = context;
  return { signed, setSigned, userId, setUserId, name, setName, userEmail, setUserEmail,logout };
}
