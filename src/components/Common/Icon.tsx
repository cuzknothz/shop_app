import React, { Children } from 'react';
import Link from 'next/link';

export const Icon = ({ children, href, size }: any) => {
  if (href) {
    return (
      <div
        className={`${
          size === 'l' ? 'w-[30px] h-[30px]' : 'w-[22px] h-[22px]'
        }`}
      >
        <Link href={href} passHref>
          <a>{children}</a>
        </Link>
      </div>
    );
  }
  return (
    <div
      className={`${size === 'l' ? 'w-[30px] h-[30px]' : 'w-[22px] h-[22px]'}`}
    >
      <a>{children}</a>
    </div>
  );
};
