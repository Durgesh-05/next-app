// 'use client';

// // To make it client component
// // By deafult it is server component
// // Reason to use client becuase there are some features which is available only in client side and bydefault everything is server component in next js so to avoid it we use use client component. Features like states btn onlick onchange etc are available only in client side
// const Signin = () => {
//   // If I dont use "use client" here this onClick handler give me error
//   function clickHandler() {
//     console.log('clicked');
//   }
//   return (
//     <div className='h-screen flex justify-center flex-col'>
//       <div className='flex justify-center '>
//         <a
//           href='#'
//           className='block w-1/3 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 '
//         >
//           <div>
//             <div className='px-10'>
//               <div className='text-3xl font-extrabold text-center'>Sign in</div>
//             </div>
//             <div className='pt-2'>
//               <LabelledInput
//                 label='Username'
//                 placeholder='durgesh@google.com'
//               />
//               <LabelledInput
//                 label='Password'
//                 type={'password'}
//                 placeholder='123456'
//               />
//               <button
//                 onClick={clickHandler}
//                 type='button'
//                 className='mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'
//               >
//                 Sign in
//               </button>
//             </div>
//           </div>
//         </a>
//       </div>
//     </div>
//   );
// };

// interface LabelledInputType {
//   label: string;
//   placeholder: string;
//   type?: string;
// }

// const LabelledInput = ({ label, placeholder, type }: LabelledInputType) => {
//   return (
//     <div>
//       <label className='block mb-2 text-sm text-black font-semibold pt-4'>
//         {label}
//       </label>
//       <input
//         type={type || 'text'}
//         id={label.toLowerCase()}
//         name={label.toLowerCase()}
//         className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
//         placeholder={placeholder}
//         required
//       />
//     </div>
//   );
// };

// export default Signin;

import { Signin } from '@/components/Signin';
export default function () {
  return <Signin />;
}
