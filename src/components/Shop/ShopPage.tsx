import React, { useState } from 'react';
import { CollectionPreview } from './CollectionPreview';
import { useSession, signIn, signOut } from 'next-auth/react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '@/store/reselect/shop';

const ShopPage: React.FC = ({ shopData }: any) => {
  return (
    <div className="w-full sm:w-2/3 mx-auto">
      <div className="">
        {shopData.map(({ id, ...otherSectionProps }: any) => (
          <CollectionPreview key={id} {...otherSectionProps} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  shopData: selectDirectorySections,
});
export default connect(mapStateToProps)(ShopPage);
