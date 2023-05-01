import { UserDTO } from '@dtos/UserDTO';
import { createContext, useState } from 'react';

export type AuthContextDataProps = {
  user: UserDTO;
}

type AuthContextProviderProps = {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState({
    user: {
      id: '1',
      name: 'Marco',
      email: 'marco@gmail.com',
      avatar: 'marco.png'
    }
  });

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  )
}