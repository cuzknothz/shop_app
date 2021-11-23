import React from 'react';
import { NextPage } from 'next';
const prerender: NextPage = ({ hi }: any) => {
  return <div>{hi}</div>;
};

export default prerender;
export async function getStaticProps() {
  return {
    props: {
      hi: 'fjhkskdjfhjksd',
    },
  };
}
