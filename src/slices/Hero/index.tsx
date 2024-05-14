import { Content, isFilled } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import ButtonLink from "@/components/ButtonLink";
import Bounded from "@/components/Bounded";
import StarGrid from "@/components/StarGrid";
import AnimatedContent from "@/slices/Hero/AnimatedContent";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={"text-center"}
    >
      <AnimatedContent slice={slice} />
    </Bounded>
  );
};

export default Hero;
