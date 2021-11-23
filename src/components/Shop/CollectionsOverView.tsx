import React from 'react';
import CardItem from './CardItem';
import Link from 'next/link';

export const CollectionFull: React.FC = ({ title, routeName, items }: any) => {
  return (
    <div className="w-full sm:mt-8">
      <div>
        <p className="text-base font-semibold mb-2">{title.toUpperCase()}</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 justify-items-stretch  gap-[1px] sm:gap-3">
        {items.map((item: any) => (
          <CardItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
