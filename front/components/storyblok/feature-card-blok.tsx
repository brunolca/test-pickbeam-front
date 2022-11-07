import { storyblokEditable } from "@storyblok/react";
import { FeatureCardStoryblok } from "../../component-types-sb";
import { FeatureCard } from "../feature-card";
import { NumberBackgroundImage } from "../number-background-image";
import { ThemedStoryblok } from "./blok";
import { resolveIcon } from "./icon-blok";

export function FeatureCardBlok({
  blok,
  theme,
  i,
}: ThemedStoryblok<FeatureCardStoryblok>) {
  return (
    <FeatureCard
      {...storyblokEditable(blok)}
      title={blok.title || ""}
      description={blok.description || ""}
      theme={theme}
      Icon={resolveIcon(blok.icon)}
      Background={
        blok.withBackgroundNumber
          ? () => <NumberBackgroundImage number={i + 1} />
          : () => null
      }
    />
  );
}
