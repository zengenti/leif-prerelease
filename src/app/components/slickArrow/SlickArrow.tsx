import React from 'react';
import Icon from '~/components/icon/Icon';

interface Props {
  className?: string;
  onClick?: (ev:any) => void;
  type: string;
}

const SlickArrow: React.FC<Props> = ({ className, type, onClick }) => {
  return (
    <button
      className={className}
      type="button"
      onClick={onClick}
      aria-label={`${type === 'chevronLeft' ? 'left' : 'right'} slide`}>
      <Icon type={type} />
    </button>
  )
};

export default SlickArrow;