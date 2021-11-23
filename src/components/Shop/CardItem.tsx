import React from 'react';
import Image from 'next/image';
import { connect } from 'react-redux';
import { addItem } from '@/store/action/cartAction';

const CardItem = ({ item, addItem }: any) => {
  return (
    <div className="relative aspect-h-3 aspect-w-2  min-w-[160px]  text-xs group overflow-hidden">
      <div className="absolute inset-0">
        <h5 className="z-10 absolute -bottom-1 left-1/2 -translate-x-1/2 text-white text-center w-full h-10">
          {item.name}
        </h5>
        <p className="z-10 absolute bottom-0 left-1/2 -translate-x-1/2 text-white">
          {item.price} $
        </p>
        <div
          onClick={() => {
            addItem(item);
          }}
          className={`z-10 absolute sm:-bottom-1/2 left-1/2
        -translate-x-1/2 translate-y-1/2 bg-gray-200 h-8 w-36 flex justify-center items-center bottom-[60px] sm:group-hover:bottom-[60px] sm:transform sm:duration-75 cursor-pointer`}
        >
          <p> ADD TO CART</p>
        </div>
      </div>

      <Image
        src={item.imageUrl}
        layout="fill"
        alt=""
        className="object-cover"
      />
    </div>
  );
};
const mapDispatchToProps = (dispatch: any) => ({
  addItem: (item: any) => dispatch(addItem(item)),
});
const mapStateToProps = (state: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CardItem);
