'use client';

import { ChangeEvent } from 'react';

interface LabelledInputType {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const LabelledInput = ({
  label,
  placeholder,
  type,
  value,
  onChange,
}: LabelledInputType) => {
  return (
    <div>
      <label className='block mb-2 text-sm text-black font-semibold pt-4'>
        {label}
      </label>
      <input
        type={type || 'text'}
        id={label.toLowerCase()}
        name={label.toLowerCase()}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
        placeholder={placeholder}
        value={value}
        required
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
      />
    </div>
  );
};
