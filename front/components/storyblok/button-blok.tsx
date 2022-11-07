import { storyblokEditable } from "@storyblok/react";
import { ButtonStoryblok } from "../../component-types-sb";
import { Button } from "../button";
import { ThemedStoryblok } from "./blok";

export function ButtonBlok({ blok, theme }: ThemedStoryblok<ButtonStoryblok>) {
  return (
    <Button
      {...storyblokEditable(blok)}
      theme={theme}
      cta={blok.cta}
      href={blok.href}
    />
  );
}
