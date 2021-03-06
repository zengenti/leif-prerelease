import { Props as GenericHeroProps } from '~/components/genericHero/GenericHero';
import { Props as CTABannerProps } from '~/components/ctaBanner/CTABanner';
import { Props as MetadataProps } from '~/components/metadata/Metadata';

export interface MappedProps {
  title: string;
  featuredBlogProps: GenericHeroProps;
  ctaBannerProps: CTABannerProps;
  metadataProps: MetadataProps;
}

export interface Props {
  mappedEntry: MappedProps;
}
