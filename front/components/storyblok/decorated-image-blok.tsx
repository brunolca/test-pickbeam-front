import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import { DecoratedImageStoryblok } from "../../component-types-sb";
import { resolveImageDecoration } from "../image-decoration/resolve-image-decoration";
import { ThemedStoryblok } from "./blok";

export function DecoratedImageBlok({
  blok,
  theme,
}: ThemedStoryblok<DecoratedImageStoryblok>) {
  const Decoration = resolveImageDecoration(blok.decoration);

  if (!blok.image) {
    return null;
  }

  return (
    <Decoration
      {...storyblokEditable(blok)}
      theme={theme}
      Image={() => (
        <Image
          alt={blok.image?.alt || ""}
          src={blok.image?.filename || ""}
          fill
          style={{ objectFit: "cover" }}
        />
      )}
    />
  );
}
