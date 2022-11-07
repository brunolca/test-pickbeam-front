import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { SectionGridStoryblok } from "../../component-types-sb";
import { resolveSectionGridLayout } from "../section/resolve-section-grid-layout";

interface SectionGridBlokProps {
  blok: SectionGridStoryblok;
}

export function SectionGridBlok({ blok }: SectionGridBlokProps) {
  const SectionGrid = resolveSectionGridLayout(blok.layout);
  const [illustration] = blok.illustration || [];

  return (
    <SectionGrid
      {...storyblokEditable(blok)}
      key={blok._uid}
      title={blok.title}
      subtitle={blok.subtitle}
      description={blok.description}
      GridComponents={blok.children.map((child) => ({ theme, i }) => (
        <StoryblokComponent blok={child} key={child._uid} theme={theme} i={i} />
      ))}
      Image={({ theme }) => (
        <StoryblokComponent
          blok={illustration}
          key={illustration?._uid}
          theme={theme}
        />
      )}
      theme={blok.theme}
    />
  );
}
