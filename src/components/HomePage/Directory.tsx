import React from 'react';
import { DirectoryItem } from '@/components/HomePage/DirectoryItem';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '@/store/reselect/directory';


const Directory: React.FC = ({ directory }: any) => {
  console.log(directory);
  return (
    <div className="w-full grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-5 md:grid-cols-3 md:gap-x-7 md:gap-y-7 ">
      {directory.map(({ id, ...otherSectionProps }: any) => (
        <DirectoryItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  directory: selectDirectorySections,
});
export default connect(mapStateToProps, null)(Directory);
