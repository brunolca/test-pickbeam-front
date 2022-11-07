import { storyblokEditable } from "@storyblok/react";
import { SectionGridStoryblok } from "../../component-types-sb";
import { Newsletter } from "../static/newsletter";

interface SectionNewsletterBlokProps {
  blok: SectionGridStoryblok;
}

export function SectionNewsletterBlok({ blok }: SectionNewsletterBlokProps) {
  return <Newsletter {...storyblokEditable(blok)} />;
}
