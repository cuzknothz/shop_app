import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
export const Redirect = ({ to }:any) => {
  const router = useRouter();
  useEffect(() => {
    router.push(to);
  }, []);

  return null;
};
