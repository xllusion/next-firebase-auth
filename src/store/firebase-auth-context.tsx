import { User } from 'firebase/auth';
import React, { useContext } from 'react';
import { useFirebaseAuth } from '../hooks/useFirebaseAuth';

interface AuthContextInterface {
  authStatus: 'loading' | 'authenticated' | 'unauthenticated';
  formStatus?: 'submitting' | 'succeeded' | 'error';
  user?: User;
  errorText?: string;
  resetErrorStatus: () => void;
  signOutFB: () => void;
  sendEmailVerificationFB: () => void;
  sendPasswordResetEmailFB: (email: string) => void;
  createUserWithEmailAndPasswordFB: (email: string, password: string) => void;
  signInWithEmailAndPasswordFB: (email: string, password: string) => void;
  signInWithGoogleFB: () => void;
}

const AuthContext = React.createContext<AuthContextInterface>({} as AuthContextInterface);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const auth = useFirebaseAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;