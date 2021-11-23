import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectDirectorySections } from '@/store/reselect/shop';
import { CollectionFull } from '@/components/Shop/CollectionsOverView';

const ShopDetail: React.FC = ({ shopData }: any) => {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  console.log(id);
  const filter = shopData.map((i: any) => i);
  console.log(filter);

  return (
    <div className="w-full sm:w-2/3 mx-auto">
      <div className="">
        {shopData
          .filter((i: any) => i.routeName === id)
          .map(({ id, ...otherSectionProps }: any) => (
            <CollectionFull key={id} {...otherSectionProps} />
          ))}
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  shopData: selectDirectorySections,
});

export default connect(mapStateToProps, null)(ShopDetail);
