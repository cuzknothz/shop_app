import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const DirectoryItem = ({ title, imageUrl, linkUrl }: any) => {
  return (
    <>
      <Link href={linkUrl} passHref>
        <a>
          <div className="group flex justify-center items-center relative rounded-xl overflow-hidden shadow-lg h-[100px] bg-black mx-auto sm:h-[150px] md:[200px]">
            <div className="z-20 flex justify-center items-center rounded-lg text-yellow-300 text-sm font-bold bg-white w-20 h-10">
              <p className="z-10 uppercase">{title}</p>
            </div>
            <Image
              className="object-cover group-hover:scale-110 transition ease-in-out duration-300"
              layout="fill"
              src={imageUrl}
              alt=""
            />
          </div>
        </a>
      </Link>
    </>
  );
};
