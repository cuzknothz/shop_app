import React from 'react';
import CardItem from './CardItem';
import Link from 'next/link';

export const CollectionPreview: React.FC = ({
  title,
  routeName,
  items,
}: any) => {
  return (
    <div className="w-full sm:mt-8">
      <div>
        <p className="text-base font-semibold mb-2">{title.toUpperCase()}</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 justify-items-stretch  gap-[1px] sm:gap-3">
        {items
          .filter((item: any, idx: any) => idx < 4)
          .map((item: any) => (
            <CardItem key={item.id} item={item} />
          ))}
      </div>
      <Link href={`/shop/${routeName}`} passHref>
        <a>
          <div className="w-full h-10 mt-2 border border-black flex justify-center items-center cursor-pointer">
            <p className="text-xs">View More...</p>
          </div>
        </a>
      </Link>
    </div>
  );
};
