import type { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import {
  PrismicRichText,
  SliceComponentProps,
  JSXMapSerializer,
} from "@prismicio/react";
import Bounded from "@/components/Bounded";

const components: JSXMapSerializer = {
  hyperlink: ({ node, children }) => {
    return <PrismicNextLink field={node.data}>{children}</PrismicNextLink>;
  },
  label: ({ node, children }) => {
    if (node.data.label === "codespan") {
      return <code>{children}</code>;
    }
  },
};

/**
 * Props for `RichText`.
 */
type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

/**
 * Component for "RichText" Slices.
 */
const RichText = ({ slice }: RichTextProps): JSX.Element => {
  return (
    <Bounded>
      <div className="prose prose-lg prose-slate prose-invert mb-5">
        <PrismicRichText
          field={slice.primary.content}
          components={components}
        />
      </div>
      <iframe
        className={"rounded-2xl"}
        src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fswooptrans%2Fvideos%2F521181323512377%2F&show_text=false&width=267&t=0"
        width="auto"
        height="600"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </Bounded>
  );
};

export default RichText;
