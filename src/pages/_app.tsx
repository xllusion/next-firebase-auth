import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import AuthProvider, { useAuth } from '../store/firebase-auth-context';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Navbar } from '../components';

export type NextPageWithAuth<P = {}, IP = P> = NextPage<P, IP> & {
  auth?: 'auth' | 'user' | 'verifyEmail';
};

type AppPropsWithAuth = AppProps & { Component: NextPageWithAuth };

function MyApp({ Component, pageProps }: AppPropsWithAuth) {
  return (
    <AuthProvider>
      <Navbar />
      {getAuthLayout(<Component {...pageProps} />, Component.auth)}
    </AuthProvider>
  );
}

const getAuthLayout = (page: React.ReactElement, auth?: 'auth' | 'user' | 'verifyEmail'): React.ReactNode => {
  if (auth === 'auth') return <Auth>{page}</Auth>;
  if (auth === 'user') return <AuthUser>{page}</AuthUser>;
  if (auth === 'verifyEmail') return <AuthVerifyEmail>{page}</AuthVerifyEmail>;
  return <>{page}</>;
};

const Auth: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const { authStatus, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    let pathName = '/';
    if (router.isReady) {
      const { redirect } = router.query;
      pathName = redirect ? (redirect as string) : '/';
    }

    if (authStatus === 'authenticated' && user) {
      if (user.emailVerified) {
        router.replace(pathName);
      } else {
        router.replace('/auth/verifyemail');
      }
    }
  }, [router, authStatus, user]);

  if (authStatus === 'unauthenticated') {
    return children;
  }

  if (authStatus === 'loading') {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className='w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-600'></div>
      </div>
    );
  }

  return <></>;
};

const AuthUser: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const { authStatus, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    let redirect = '';
    if (router.isReady && router.pathname !== '/') redirect = '?redirect=' + router.pathname;
    if (authStatus === 'unauthenticated') router.replace('/auth/signin' + redirect);
  }, [router, authStatus]);

  if (authStatus === 'authenticated' && user) {
    if (user.emailVerified) {
      return children;
    } else {
      router.replace('/auth/verifyemail');
    }
  }

  if (authStatus === 'loading') {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className='w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-600'></div>
      </div>
    );
  }

  return <></>;
};

const AuthVerifyEmail: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const { authStatus, user } = useAuth();
  const router = useRouter();

  if (authStatus === 'unauthenticated') router.replace('/auth/signin');

  if (authStatus === 'authenticated' && user) {
    if (user.emailVerified) {
      router.replace('/');
    } else {
      return children;
    }
  }

  if (authStatus === 'loading') {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className='w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-600'></div>
      </div>
    );
  }

  return <></>;
};

export default MyApp;
