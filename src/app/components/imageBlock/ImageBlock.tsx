import React from 'react';

import ImageBlockStyled from './ImageBlock.styled';
import Image, { ImageObject } from '../image/Image';

interface Props {
  className: string;
  image: ImageObject;
  title: string;
  text: string;
}

const ImageBlock: React.FC<Props> = ({ className, image, title, text }) => {
  if (!image) return null;
  return (
    <ImageBlockStyled className={className}>
      <div className="image-block__wrapper">
        <Image
          className="image-block__image"
          image={image}
          width={840}
          height={480}
        />
      </div>
      <p className="image-block__title">{title}</p>
      <p className="image-block__text">{text}</p>
    </ImageBlockStyled>
  );
};

export default ImageBlock;