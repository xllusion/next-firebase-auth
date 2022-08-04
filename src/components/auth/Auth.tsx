import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '../../store/firebase-auth-context';

const Auth: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const { status } = useAuth();
  const router = useRouter();

  useEffect(() => {
    let pathName = '/';
    if (router.isReady) {
        const { redirect } = router.query;
        pathName = redirect ? redirect as string : '/';
    }
    if (!status.loading && status.user) router.replace(pathName);
  }, [router, status]);

  if (!status.loading && !status.user) {
    return children;
  }

  return <></>;
};

export default Auth;
