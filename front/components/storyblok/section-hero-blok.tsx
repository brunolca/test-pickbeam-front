import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { SectionHeroStoryblok } from "../../component-types-sb";
import { resolveSectionHeroLayout } from "../section";

interface SectionHeroBlokProps {
  blok: SectionHeroStoryblok;
  i: number;
}

export function SectionHeroBlok({ blok, i }: SectionHeroBlokProps) {
  const Hero = resolveSectionHeroLayout(blok.layout);
  const [button] = blok.button || [];

  return (
    <Hero
      {...storyblokEditable(blok)}
      key={blok._uid}
      theme={blok.theme as any}
      size={i === 0 ? "large" : "normal"}
      title={blok.title || ""}
      subtitle={blok.subtitle || ""}
      description={blok.description || ""}
      Button={({ theme }) => (
        <StoryblokComponent blok={button} key={button?._uid} theme={theme} />
      )}
    />
  );
}
