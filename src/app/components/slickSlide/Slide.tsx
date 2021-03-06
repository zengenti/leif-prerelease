import React from 'react';

import SlideStyled from './Slide.styled';
import Image from '../image/Image';
interface Props {
  className?: string;
  path: string;
  alt: string;
  height?: number;
  width?: number;
  hasScrollImage?: boolean;
}

const Slide = ({
  className,
  path,
  alt,
  height,
  width,
  hasScrollImage,
}: Props) => {
  if (!path) return null;

  return (
    <SlideStyled
      className={className}
      hasScrollImage={hasScrollImage}
      path={path}
    >
      {!hasScrollImage && (
        <Image
          path={path}
          alt={alt}
          className="slide__image"
          height={height}
          width={width}
        />
      )}
      {hasScrollImage && (
        <div className="slide__bg-image-wrapper">
          <div className="slide__bg-image" />
        </div>
      )}
    </SlideStyled>
  );
};

export default Slide;
