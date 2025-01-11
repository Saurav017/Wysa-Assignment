import React from 'react';

const HeaderTitle = ({ title }) => {
  return (
    <h1 className="text-black font-bold text-xl pl-4 mt-20 sm:mt-4  mb-8 truncate">
      {title}
    </h1>
  );
};

export default HeaderTitle;
