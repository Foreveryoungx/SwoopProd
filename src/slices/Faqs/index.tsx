import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Bounded from "@/components/Bounded";

/**
 * Props for `Faqs`.
 */
export type FaqsProps = SliceComponentProps<Content.FaqsSlice>;

/**
 * Component for "Faqs" Slices.
 */
const Faqs = ({ slice }: FaqsProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h2
        className={
          "max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl"
        }
      >
        <PrismicRichText field={slice.primary.heading} />
      </h2>
      <div className={"glass-container mt-16 w-fit"}>
        <PrismicRichText field={slice.primary.body} />
      </div>
    </Bounded>
  );
};

export default Faqs;
