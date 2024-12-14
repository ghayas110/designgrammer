'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLoginUserMutation } from '../../redux/authApiSlice';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { message } from 'antd';
const SignIn = () => {
  const { register, handleSubmit } = useForm();
  const [loginUser, { isLoading, error }] = useLoginUserMutation();
  const [loading, setLoading] = useState(false);
const router = useRouter();
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const result = await loginUser(data).unwrap();
      console.log(result);
      if(result.message === 'successfully login'){
        message.success(result.message);
        localStorage.setItem('user', (result.data));
        localStorage.setItem('token', result.access_token);

        router.push('/');
      }else{
        message.error(result.message);
      }
    
      setLoading(false);
    } catch (err) {
      console.error('Failed to login:', err);
      setLoading(false);
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex flex-wrap items-center h-screen">
        <div className="hidden w-full xl:block xl:w-1/2">
          <div className="px-26 py-17.5 text-center">
            <Link className="mb-5.5 inline-block" href="/">
              <Image
                className="dark:block"
                src={"/images/logos.png"}
                alt="Logo"
                width={376}
                height={32}
              />
            </Link>
          </div>
        </div>

        <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
          <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
            <Link className="mb-5.5 inline-block xl:hidden" href="/">
              <Image
                className="dark:block"
                src={"/images/logos.png"}
                alt="Logo"
                width={176}
                height={32}
              />
            </Link>
            <h2 className="mb-9 text-2xl font-bold text-black dark:text-black sm:text-title-xl2">
              Sign In to DesignGrammar
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black dark:text-black">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    {...register('email', { required: true })}
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-black dark:focus:border-primary"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="mb-2.5 block font-medium text-black dark:text-black">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="6+ Characters, 1 Capital letter"
                    {...register('password', { required: true })}
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-black dark:focus:border-primary"
                  />
                </div>
              </div>

              {error && <p className="text-red-500 mb-4">{error.data?.message || 'Failed to login'}</p>}
              <div className="mb-5">
                <input
                  type="submit"
                  value={loading ? 'Signing In...' : 'Sign In'}
                  disabled={loading}
                  className="w-full cursor-pointer rounded-lg border border-primary bg-blue-500 p-4 text-white transition hover:bg-opacity-90"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;