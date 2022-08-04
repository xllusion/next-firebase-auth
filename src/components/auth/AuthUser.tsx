import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "../../store/firebase-auth-context";

const AuthUser: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const { status } = useAuth();
  const router = useRouter();

  useEffect(() => {
    let redirect = '';
    if(router.isReady) redirect = '?redirect='+router.pathname;
    if (!status.loading && !status.user) router.replace('/auth/login' + redirect);
  }, [router, status]);

  if (!status.loading && status.user) {
    console.log('emailVerified: ' + status.user?.emailVerified);
    return children;
    //if (status.user.emailVerified) return children;
    //else return <>Please verify your email ...</>;
  }

  console.log('Not Login!');
  return <></>;
};

export default AuthUser;
