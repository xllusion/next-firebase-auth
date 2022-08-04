import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAuth } from '../../store/firebase-auth-context';
import { SignInForm } from '../../components';
import Link from 'next/link';
import type { NextPageWithAuth } from '../_app';

const CreateUser: NextPageWithAuth = () => {
  const { formStatus, createUserWithEmailAndPasswordFB, resetErrorStatus } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (formStatus === 'error') {
      const timer = setTimeout(() => {
        resetErrorStatus();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [resetErrorStatus, router, formStatus]);

  const submitHandler = (email: string, password: string) => {
    createUserWithEmailAndPasswordFB(email, password);
  };

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <title>Create new account</title>
      </Head>

      <div className='relative overflow-auto'>
        <section className='flex flex-col p-8 mx-auto sm:rounded-md sm:shadow sm:mt-12 bg-gray-50/80 w-full min-h-screen min-w-[280px] sm:w-fit sm:min-h-fit'>
          <h2 className='mb-3 text-3xl font-semibold text-center'>Create new account</h2>
          <p className='text-base text-center mb-4'>
            Have other account?{' '}
            <Link href={'/auth/signin'}>
              <a className='focus:underline hover:underline'>Sign in here</a>
            </Link>
          </p>

          <SignInForm
            mode={'signUp'}
            formStatus={{
              submitting: formStatus === 'submitting',
              //succeeded: status.succeeded,
              error: formStatus === 'error',
            }}
            formStatusText={{ submitting: 'Signing up...' }}
            onSubmit={submitHandler}
          />
        </section>
      </div>
    </>
  );
};

CreateUser.auth = 'auth';

export default CreateUser;