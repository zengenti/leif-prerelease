import React from 'react';

interface Props {
  props?: any;
}

const Pot = (props:Props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0.75 1.75H23.25V7.75H0.75V1.75Z"
      stroke="#2B2F51"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 7.75L18.942 21.472C18.8888 21.8275 18.7097 22.1521 18.4374 22.3866C18.165 22.6212 17.8174 22.7501 17.458 22.75H6.542C6.18255 22.7501 5.83501 22.6212 5.56265 22.3866C5.29028 22.1521 5.1112 21.8275 5.058 21.472L3 7.75"
      stroke="#2B2F51"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.425 18.25H4.597"
      stroke="#2B2F51"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Pot;
