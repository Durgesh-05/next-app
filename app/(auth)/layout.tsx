import { ReactNode } from 'react';

export default function BannerLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className='text-center border-b border-gray-500 p-4 font-bold text-2xl '>
        50% of for Navratri
      </div>
      {children}
    </div>
  );
}
