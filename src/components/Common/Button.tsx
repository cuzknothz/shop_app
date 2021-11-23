import React from 'react';

export const Button = ({ children, ...otherProps }: any) => {
  return (
    <button {...otherProps} className="border border-black">
      {children}
    </button>
  );
};
