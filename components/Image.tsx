import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const Image = ({ src, alt, width, height, className }) => {
  return (
    <>
      <Zoom>
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${src}`}
          alt={alt}
          width={width}
          height={height}
          className={className}
        ></img>
      </Zoom>
    </>
  );
};

export default Image;
