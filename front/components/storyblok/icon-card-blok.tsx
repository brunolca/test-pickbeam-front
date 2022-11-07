import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import { IconCardStoryblok } from "../../component-types-sb";
import { IconCard } from "../icon-card";
import { ThemedStoryblok } from "./blok";
import { resolveIcon } from "./icon-blok";

export function IconCardBlok({
  blok,
  theme,
}: ThemedStoryblok<IconCardStoryblok>) {
  return (
    <IconCard
      {...storyblokEditable(blok)}
      key={blok._uid}
      Icon={
        blok.icon?.filename
          ? () => (
              <Image
                src={blok.icon?.filename || ""}
                alt={blok.icon?.alt || ""}
                fill
              />
            )
          : () => null
      }
      firstLine={blok.firstLine || ""}
      secondLine={blok.secondLine || ""}
      href={blok.href?.cached_url || ""}
      theme={theme}
    />
  );
}
