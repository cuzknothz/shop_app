import { NextPage } from 'next';
import React from 'react';
import { connect } from 'react-redux';
import Image from 'next/image';
import { addItem } from '@/store/action/cartAction';
import { selectCartItems } from '@/store/reselect/cart';
import { deleteItem } from '@/store/action/cartAction';
import { createStructuredSelector } from 'reselect';
import { selectCartToTalPrice } from '@/store/reselect/cart';

const Cart: NextPage = ({ items, addItem, deleteItem, totalPrice }: any) => {
  console.log(items);
  return (
    <div className="w-full min-h-full">
      {items.map((i: any) => (
        <div key={i.id}>
          <div>{i.name}</div>
          <div className="relative w-[200px] h-[300px]">
            <Image src={i.imageUrl} layout="fill" alt="" />
          </div>
          <div className="relative inline-flex space-x-3">
            <p onClick={() => {}} className="cursor-pointer">
              -
            </p>
            <div>{i.quantity}</div>
            <p
              onClick={() => {
                addItem(i);
              }}
              className="cursor-pointer"
            >
              +
            </p>
          </div>

          <span className="ml-10">{i.price} $</span>
          <span
            className="ml-10 cursor-pointer"
            onClick={() => {
              deleteItem(i);
            }}
          >
            X
          </span>
        </div>
      ))}
      <div> Total {totalPrice}$</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
  totalPrice: selectCartToTalPrice,
});
const mapDispatchToProps = (dispatch: any) => ({
  addItem: (item: any) => dispatch(addItem(item)),
  deleteItem: (item: any) => dispatch(deleteItem(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
