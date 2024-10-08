'use client';

import { useState } from 'react';
import { LabelledInput } from './LabelledInput';

export const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  console.log(username, password);

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
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
