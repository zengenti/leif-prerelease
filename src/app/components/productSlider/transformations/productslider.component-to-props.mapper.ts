import mapEntriesToResults from '~/components/search/transformations/entry-to-card-props.mapper';

export const productSliderPropsMapping = {
  title: 'title',
  summary: 'summary',
  ctaLink: () => '/shop',
  ctaText: () => 'Shop now',
  bgImageUri: () => '/static/img/backgrounds/product-slider-background.png',
  curatedProducts: ({ curatedProducts }: any) =>
    mapEntriesToResults(curatedProducts),
  productsByFilter: 'productsByFilter.entryTitle',
};
