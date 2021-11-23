import React, { useEffect, ReactNode, Dispatch } from 'react';
import HeaderAsTabBar from './HeaderAsTabBar';
import { connect } from 'react-redux';
import { setCurrentUser } from '@/store/action/userAction';

import { useSession, signIn, signOut } from 'next-auth/react';

interface Props {
  children: ReactNode;
  setUser: Function;
}

const Layout: React.FC<Props> = ({ children, setUser }) => {
  const { data, status } = useSession({
    required: true,
    onUnauthenticated() {},
  });
  useEffect(() => {
    setUser(data?.user);
  }, [data]);
  return (
    <>
      <div className="h-0 sm:h-[50px]"></div>
      <HeaderAsTabBar />
      {children}
      <div className="h-[50px]  sm:hidden"></div>
    </>
  );
};
const mapDispatchToProps = (dispatch: any) => ({
  setUser: (user: any) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(Layout);
