import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';
import { Icon } from '../Common/Icon';
import HomeIcon from '@/assets/svg/home.svg';
import Home2Icon from '@/assets/svg/_home.svg';
import CartIcon from '@/assets/svg/cart.svg';
import LoginIcon from '@/assets/svg/login.svg';
import { connect } from 'react-redux';
import { CartDropDown } from '../Cart/Cart';
import { toogleCartShow } from '@/store/action/cartAction';
import {
  selectCartItemCount,
  selectCartIsShow,
} from '../../store/reselect/cart';
import { selectCurrentUser } from '@/store/reselect/user';
import { createStructuredSelector } from 'reselect';

const HeaderAsTabBar = ({
  currentUser,
  toggleShowCart,
  isShow,
  totalItemInCart,
}: any) => {
  const router = useRouter();
  return (
    <div className="w-full h-[60px] sm:h-[50px] items-center border-t-[1px] sm:border-b-[1px] border-b-[#dbdbdb] fixed bottom-0 right-0 sm:top-0 sm:left-0  bg-white z-50  flex">
      <div className="w-full sm:w-2/3 sm:mx-auto flex justify-evenly sm:justify-between items-center">
        <div className="hidden sm:block">
          <Icon href="/" size="l">
            <HomeIcon />
          </Icon>
        </div>
        <div className="flex w-full justify-evenly sm:justify-end sm:flex sm:space-x-5  ">
          <Icon size="m">
            <Home2Icon
              onClick={() => {
                router.push('/shop');
              }}
            />
          </Icon>
          <div
            className="relative cursor-pointer"
            onClick={() => {
              router.push('/cart');
            }}
          >
            <div className="w-4 h-4 rounded-full bg-red-600 absolute bottom-0 right-0 animate-bounce flex justify-center items-center">
              <p className="text-xs">{totalItemInCart}</p>
            </div>
            <Icon>
              <CartIcon />
            </Icon>
          </div>

          <div
            onClick={() => {
              if (currentUser?.image) {
                return signOut();
              }
            }}
            className={`relative cursor-pointer ${
              currentUser ? 'rounded-full overflow-hidden' : ''
            }`}
          >
            {currentUser?.image ? (
              <div onClick={() => signOut()} className="w-[26px] h-[26px]">
                <Image
                  src={currentUser.image}
                  layout="fill"
                  alt=""
                  className="object-cover"
                />
              </div>
            ) : (
              <Icon href="auth/signin">
                <LoginIcon />
              </Icon>
            )}
          </div>
        </div>
      </div>
      {/* Cart Drop Down */}
      {isShow && (
        <div className="absolute right-0 top-12">
          <CartDropDown />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isShow: selectCartIsShow,
  totalItemInCart: selectCartItemCount,
});
const mapDispatchToProps = (dispatch: any) => ({
  toggleShowCart: () => dispatch(toogleCartShow()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderAsTabBar);
