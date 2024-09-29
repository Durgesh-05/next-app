'use client';

import { useState } from 'react';
import { LabelledInput } from './LabelledInput';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { userSignup } from '@/app/actions/user';

export const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  return (
    <div className='h-screen flex justify-center flex-col'>
      <div className='flex justify-center '>
        <div className='block w-1/3 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 '>
          <div>
            <div className='px-10'>
              <div className='text-3xl font-extrabold text-center'>Sign in</div>
            </div>
            <div className='pt-2'>
              <LabelledInput
                label='Username'
                placeholder='durgesh@google.com'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <LabelledInput
                label='Password'
                type={'password'}
                placeholder='123456'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type='button'
                className='mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'
                onClick={async () =>
                  // axios
                  //   .post('http://localhost:3000/api/user', {
                  //     username,
                  //     password,
                  //   })
                  //   .then((res) => {
                  //     if (res.status === 201) {
                  //       router.push('/signin');
                  //     }
                  //   })
                  {
                    const res = await userSignup(username, password);
                    console.log(res);
                  }
                }
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
