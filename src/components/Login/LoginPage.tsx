import { FC } from 'react';
import { Button } from '../Common/Button';
import { useSession, signIn, signOut } from 'next-auth/react';

export const LoginPage: FC = () => {
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center">
        <div onClick={() => signIn()}>
          <Button>Login</Button>
        </div>
      </div>
    </div>
  );
};
