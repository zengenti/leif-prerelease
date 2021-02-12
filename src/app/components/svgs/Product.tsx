import React from 'react';

interface Props {
  props?: any;
}

const Product = (props:Props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M22.9392 2.56V8.817C22.9393 9.61244 22.6235 10.3754 22.0612 10.938L10.5002 22.5C10.2189 22.7812 9.83742 22.9392 9.43968 22.9392C9.04193 22.9392 8.66047 22.7812 8.37918 22.5L1.50018 15.62C1.21897 15.3387 1.061 14.9572 1.061 14.5595C1.061 14.1618 1.21897 13.7803 1.50018 13.499L13.0612 1.938C13.6238 1.37572 14.3867 1.05991 15.1822 1.06H21.4392C21.837 1.06 22.2185 1.21804 22.4998 1.49934C22.7811 1.78065 22.9392 2.16218 22.9392 2.56V2.56Z" stroke="#2B2F51" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M19.1892 6.31C19.1892 6.50698 19.1504 6.70204 19.075 6.88403C18.9996 7.06601 18.8891 7.23137 18.7498 7.37066C18.6106 7.50995 18.4452 7.62044 18.2632 7.69582C18.0812 7.7712 17.8862 7.81 17.6892 7.81C17.4922 7.81 17.2971 7.7712 17.1152 7.69582C16.9332 7.62044 16.7678 7.50995 16.6285 7.37066C16.4892 7.23137 16.3787 7.06601 16.3034 6.88403C16.228 6.70204 16.1892 6.50698 16.1892 6.31C16.1892 6.11302 16.228 5.91796 16.3034 5.73598C16.3787 5.55399 16.4892 5.38863 16.6285 5.24934C16.7678 5.11005 16.9332 4.99956 17.1152 4.92418C17.2971 4.8488 17.4922 4.81 17.6892 4.81C17.8862 4.81 18.0812 4.8488 18.2632 4.92418C18.4452 4.99956 18.6106 5.11005 18.7498 5.24934C18.8891 5.38863 18.9996 5.55399 19.075 5.73598C19.1504 5.91796 19.1892 6.11302 19.1892 6.31Z" stroke="#2B2F51" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>  
);

export default Product;
