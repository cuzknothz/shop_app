import React, { useEffect } from 'react';
import { signIn, getProviders } from 'next-auth/react';
import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Signin: NextPage = ({ providers }: any) => {
  const { data, status } = useSession({
    required: true,
    onUnauthenticated() {},
  });

  const router = useRouter();
  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/shop');
    }
  }, [status]);
  return (
    <div className="pt-[50px]">
      {providers &&
        Object.values(providers).map((i: any) => (
          <div key={i.name}>
            <button onClick={() => signIn(i.id)}>SignIn with {i.name}</button>
          </div>
        ))}
    </div>
  );
};

export default Signin;
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
