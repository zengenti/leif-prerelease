import React from 'react';

interface Props {
  props?: any;
}

const Basket= (props:Props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M18.936 20.625H5.064C4.73922 20.6191 4.42594 20.5037 4.17493 20.2975C3.92392 20.0913 3.74988 19.8064 3.681 19.489L1.543 10.489C1.48576 10.2735 1.47784 10.0478 1.51982 9.82875C1.5618 9.60972 1.65261 9.40297 1.7855 9.22386C1.91838 9.04476 2.08993 8.89791 2.28738 8.79423C2.48483 8.69055 2.70311 8.63271 2.926 8.625H21.074C21.2969 8.63271 21.5152 8.69055 21.7126 8.79423C21.9101 8.89791 22.0816 9.04476 22.2145 9.22386C22.3474 9.40297 22.4382 9.60972 22.4802 9.82875C22.5222 10.0478 22.5142 10.2735 22.457 10.489L20.319 19.489C20.2501 19.8064 20.0761 20.0913 19.8251 20.2975C19.5741 20.5037 19.2608 20.6191 18.936 20.625V20.625Z" stroke="#2B2F51" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4.5 8.625L9 3.375" stroke="#2B2F51" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M19.5 8.625L15 3.375" stroke="#2B2F51" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

export default Basket;
