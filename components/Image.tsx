import React from 'react';

const Image = ({ src, alt, width, height, className }) => {
  return (
    <img
      src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${src}`}
      alt={alt}
      width={width}
      height={height}
      className={className}
    ></img>
  );
};

export default Image;
