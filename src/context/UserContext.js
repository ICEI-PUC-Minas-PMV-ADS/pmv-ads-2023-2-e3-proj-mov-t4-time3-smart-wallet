import React, { createContext, useState, useContext } from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [signed, setSigned] = useState(true);
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');

  return (
    <UserContext.Provider
      value={{
        signed,
        setSigned,
        userId,
        setUserId,
        name,
        setName,
      }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  const { signed, setSigned, userId, setUserId, name, setName } = context;
  return { signed, setSigned, userId, setUserId, name, setName };
}
