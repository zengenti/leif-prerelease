import React from 'react';

import TestimonialCardStyled from './TestimonialCard.styled';
import Image from '../image/Image';

interface Props {
  className?: string;
  quote: string;
  photo: string;
  name: string;
}

const TestimonialCard = ({ className, quote, photo, name }: Props) => {
  return (
    <TestimonialCardStyled className={className}>
      <p className="testimonial-card__quote">{quote}</p>
      {photo && (
        <>
          <Image
            path={photo}
            alt={`Photo of ${name}`}
            className="testimonial-card__photo"
            width={40}
            height={40}
          />
          <span className="testimonial-card__name">{name}</span>
        </>
      )}
    </TestimonialCardStyled>
  );
};

export default TestimonialCard;
