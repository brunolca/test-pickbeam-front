import { storyblokEditable } from "@storyblok/react";
import { BlueCardStoryblok } from "../../component-types-sb";
import { BlueCard } from "../blue-card";
import { ThemedStoryblok } from "./blok";
import { resolveIcon } from "./icon-blok";

export function BlueCardBlok({
  blok,
  theme,
  i,
}: ThemedStoryblok<BlueCardStoryblok>) {
  return (
    <BlueCard
      {...storyblokEditable(blok)}
      key={blok._uid}
      Icon={resolveIcon(blok.icon)}
      title={blok.title || ""}
      description={blok.description || ""}
      href={blok.href?.cached_url || ""}
      i={i}
    />
  );
}
