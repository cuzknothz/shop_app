import React from 'react';
import { useRouter } from 'next/router';

export const CartDropDown = () => {
  const router = useRouter();
  return (
    <div className="w-[300px] h-[500px] border border-gray-500 bg-white">
      <button
        onClick={() => {
          router.push('/cart');
        }}
      >
        {'checkout'.toUpperCase()}
      </button>
    </div>
  );
};
